package com.example.demo.api.event_system;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.api.event_system.relevant_entities.OrderTicketModelSolo;

@RestController
public class EventSystemController {

    private EventSystemService eventSystemService;

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
    @GetMapping("/order")
    public OrderTicketModelSolo createOrder(
            @RequestParam(required = true) Date order_date,
            @RequestParam(required = true) Integer number_of_tickets,
            @RequestParam(required = true) Integer user_id,
            @RequestParam(required = true) Integer event_id,
            @RequestParam(required = true) Double amount,
            @RequestParam(required = true) String payment_method
    ) {
        return eventSystemService.createOrder(order_date, number_of_tickets, user_id, event_id, amount, payment_method);
    }

    // @CrossOrigin(origins = "http://localhost:3000")
    // @GetMapping("/insertVenue")
    // public void insertVenue() throws IOException{
    //     eventSystemService.insertVenue();
    // }
}
