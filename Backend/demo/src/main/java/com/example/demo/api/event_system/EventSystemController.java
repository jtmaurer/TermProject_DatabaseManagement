package com.example.demo.api.event_system;

import java.io.IOException;
import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Map;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import java.util.stream.Collectors;
import com.example.demo.api.event_system.relevant_entities.Event;
import org.springframework.web.bind.annotation.PathVariable;
import com.example.demo.api.event_system.relevant_repositories.EventRepository;
import java.util.HashMap;
import com.example.demo.api.event_system.relevant_entities.Venue;
import com.example.demo.api.event_system.relevant_repositories.VenueRepository;




import com.example.demo.api.event_system.relevant_entities.OrderTicketModelSolo;

@RestController
public class EventSystemController {

    private EventSystemService eventSystemService;

    @Autowired
    private VenueRepository venueRepository;

    @Autowired
    public EventSystemController(EventSystemService eventSystemService) {
        this.eventSystemService = eventSystemService;
    }

    @Autowired
    private EventRepository eventRepository;

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

        // Construct a response map
        Map<String, Object> response = new HashMap<>();
        response.put("event_id", event.getEvent_id());
        response.put("event_name", event.getEvent_name());
        response.put("event_date", event.getEvent_date());
        response.put("start_time", event.getStart_time());
        response.put("end_time", event.getEnd_time());
        response.put("description", event.getDescription());
        response.put("price", event.getPrice());
        response.put("online", event.getOnline());

        // Check if Venue exists and add image
        if (event.getVenue_id() != null) {
            Venue venue = event.getVenue_id();
            response.put("venue_name", venue.getVenue_name());
            response.put("venue_image", venue.getImage());
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
            @RequestParam(required = true) Integer event_id
    ) {
        return eventSystemService.createOrder(order_date, number_of_tickets, user_id, event_id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/venues")
    public List<Venue> getAllVenues() {
        return venueRepository.findAll();
    }
}
