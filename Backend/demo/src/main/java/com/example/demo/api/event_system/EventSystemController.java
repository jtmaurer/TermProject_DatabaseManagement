package com.example.demo.api.event_system;


import com.example.demo.api.event_system.relevant_entities.Event;
import com.example.demo.api.event_system.relevant_entities.Orders;
import com.example.demo.api.event_system.relevant_repositories.EventRepository;
import com.example.demo.api.event_system.relevant_repositories.OrdersRepository;
import com.example.demo.api.login_system.UserRepository;
import com.example.demo.api.login_system.User; // Adjust based on actual package

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;
import java.io.IOException;



import com.example.demo.api.event_system.relevant_entities.OrderTicketModelSolo;

@RestController
public class EventSystemController {

    private EventSystemService eventSystemService;
    private final UserRepository userRepository;
    private final EventRepository eventRepository;
    private final OrdersRepository ordersRepository;

    @Autowired
    public EventSystemController(EventSystemService eventSystemService,
                                 UserRepository userRepository,
                                 EventRepository eventRepository,
                                 OrdersRepository ordersRepository) {
        this.eventSystemService = eventSystemService;
        this.userRepository = userRepository;
        this.eventRepository = eventRepository;
        this.ordersRepository = ordersRepository;
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
    @GetMapping("/order")
    public ResponseEntity<?> createOrder(
            @RequestParam Date order_date,
            @RequestParam Integer number_of_tickets,
            @RequestParam Integer user_id,
            @RequestParam Integer event_id
    ) {
        try {
            // Fetch the User and Event objects
            User user = userRepository.findById(user_id)
                    .orElseThrow(() -> new IllegalArgumentException("Invalid user ID: " + user_id));
            Event event = eventRepository.findById(event_id)
                    .orElseThrow(() -> new IllegalArgumentException("Invalid event ID: " + event_id));

            // Create and save the order
            Orders order = new Orders();
            order.setOrder_date(order_date);
            order.setNumber_of_tickets(number_of_tickets);
            order.setUser_id(user); // Associate User entity
            order.setEvent_id(event); // Associate Event entity

            ordersRepository.save(order);

            // Return a response
            return ResponseEntity.ok("Order created successfully: " + order.getOrder_id());
        } catch (Exception e) {
            // Handle errors and return appropriate response
            return ResponseEntity.badRequest().body("Error creating order: " + e.getMessage());
        }
    }

    // @CrossOrigin(origins = "http://localhost:3000")
    // @GetMapping("/insertVenue")
    // public void insertVenue() throws IOException{
    //     eventSystemService.insertVenue();
    // }
}
