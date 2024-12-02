package com.example.demo.api.event_system;

import java.io.IOException;
import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.api.event_system.relevant_entities.Event;
import com.example.demo.api.event_system.relevant_entities.OrderTicketModelSolo;
import com.example.demo.api.event_system.relevant_entities.Venue;
import com.example.demo.api.event_system.relevant_repositories.EventRepository;
import com.example.demo.api.event_system.relevant_repositories.VenueRepository;

@RestController
public class EventSystemController {

    private EventSystemService eventSystemService;

    @Autowired
    private VenueRepository venueRepository;

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    public EventSystemController(EventSystemService eventSystemService) {
        this.eventSystemService = eventSystemService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/events")
    public Object getEvents(
            @RequestParam(required = true) Boolean user_ordered_events,
            @RequestParam(required = false) Integer user_id,
            @RequestParam(required = false) String location,
            @RequestParam(required = false) String event_date,
            @RequestParam(required = false) Double price
    ) {
        return eventSystemService.getEvents(location, event_date, price, user_id, user_ordered_events);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/tickets")
    public List<Map<String, Object>> getTickets(@RequestParam(required = true) Integer user_id) {
        return eventSystemService.getTickets(user_id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/events")
    public Event addEvent(@RequestBody Event event) {
        System.out.println("Received Event: " + event);
        return eventRepository.save(event);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/events/{id}")
    public Map<String, Object> getEventById(@PathVariable Integer id) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Event not found"));

        Map<String, Object> response = new HashMap<>();
        response.put("event_id", event.getEvent_id());
        response.put("event_name", event.getEvent_name());
        response.put("event_date", event.getEvent_date());
        response.put("start_time", event.getStart_time());
        response.put("end_time", event.getEnd_time());
        response.put("description", event.getDescription());
        response.put("price", event.getPrice());
        response.put("online", event.getOnline());

        if (event.getVenue_id() != null) {
            Venue venue = event.getVenue_id();
            response.put("venue_name", venue.getVenue_name());
            response.put("venue_image", venue.getImage());
            response.put("location", venue.getLocation());
            response.put("capacity", venue.getCapacity());
        } else {
            response.put("venue_name", null);
            response.put("venue_image", null);
        }

        return response;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/venues")
    public Venue addVenue(@RequestBody Venue venue) {
        return venueRepository.save(venue);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/order")
    public OrderTicketModelSolo createOrder(
            @RequestParam(required = true) Date order_date,
            @RequestParam(required = true) Integer number_of_tickets,
            @RequestParam(required = true) Integer user_id,
            @RequestParam(required = true) Integer event_id,
            @RequestParam(required = false) Double amount,
            @RequestParam(required = false) String payment_method
    ) {
        return eventSystemService.createOrder(order_date, number_of_tickets, user_id, event_id, amount, payment_method);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/events/{id}/remaining-capacity")
    public int getRemainingCapacity(@PathVariable Integer id) {
        return eventSystemService.getRemainingCapacity(id);
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/venues")
    public List<Venue> getAllVenues() {
        return venueRepository.findAll();
    }
}
