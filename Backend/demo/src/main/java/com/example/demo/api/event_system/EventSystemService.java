package com.example.demo.api.event_system;

import java.sql.Date;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.api.event_system.relevant_entities.Event;
import com.example.demo.api.event_system.relevant_entities.OrderTicketList;
import com.example.demo.api.event_system.relevant_entities.OrderTicketModelSolo;
import com.example.demo.api.event_system.relevant_entities.Orders;
import com.example.demo.api.event_system.relevant_entities.Ticket;
import com.example.demo.api.event_system.relevant_repositories.EventRepository;
import com.example.demo.api.event_system.relevant_repositories.OrdersRepository;
import com.example.demo.api.event_system.relevant_repositories.TicketRepository;
import com.example.demo.api.login_system.User;
import com.example.demo.api.login_system.UserRepository;

@Service
public class EventSystemService {

    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private TicketRepository ticketRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private OrdersRepository ordersRepository;

    public EventSystemService() {

    }

    public Object getEvents(String location, String date, Double price, Integer user_id, Boolean user_ordered_events) {
        Date sqlDate = date != null ? Date.valueOf(date) : null;
        if (user_ordered_events == true && user_id != null) {
            List<Map<String, Object>> raw_order_details = eventRepository.findUserOrderDetails(user_id);
            // return raw_order_details;
            return new OrderTicketList(raw_order_details);
        } else if (user_ordered_events == false && user_id != null) {
            return eventRepository.findEventsNotAssociatedWithUser(location, sqlDate, price, user_id);
        } else {
            return eventRepository.findEventsWithVenue(location, sqlDate, price);
        }
    }

    public OrderTicketModelSolo createOrder(Date order_date, Integer number_of_tickets, Integer user_id, Integer event_id) {
        // Step 1: Create a new Order entity
        Orders newOrder = new Orders();
        newOrder.setOrder_date(order_date);
        newOrder.setNumber_of_tickets(number_of_tickets);

        // Fetch and set the User entity (assuming a UserRepository exists)
        User user = userRepository.findById(user_id).orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));
        newOrder.setUser_id(user);

        // Fetch and set the Event entity (assuming an EventRepository exists)
        Event event = eventRepository.findById(event_id).orElseThrow(() -> new IllegalArgumentException("Invalid event ID"));
        newOrder.setEvent_id(event);

        // Save the Order entity to the database
        Orders savedOrder = ordersRepository.save(newOrder);

        // Step 2: Generate Ticket entities and save them to the database
        List<Map<String, Object>> tickets = new ArrayList<>();
        for (int i = 0; i < number_of_tickets; i++) {
            Ticket ticket = new Ticket();
            ticket.setOrder_id(savedOrder);
            ticket.setSeat_number("Seat-" + (i + 1)); // Example logic for seat number generation
            Ticket savedTicket = ticketRepository.save(ticket);

            // Convert the Ticket entity to a HashMap
            Map<String, Object> ticketData = new HashMap<>();
            ticketData.put("ticket_id", savedTicket.getTicket_id());
            ticketData.put("seat_number", savedTicket.getSeat_number());
            ticketData.put("order_id", savedOrder.getOrder_id());
            tickets.add(ticketData);
        }

        // Step 3: Construct the OrderTicketModel
        Map<String, Object> orderData = new HashMap<>();
        orderData.put("order_id", savedOrder.getOrder_id());
        orderData.put("order_date", savedOrder.getOrder_date());
        orderData.put("number_of_tickets", savedOrder.getNumber_of_tickets());
        orderData.put("user_id", user_id);
        orderData.put("event_id", event_id);

        OrderTicketModelSolo orderTicketModelSolo = new OrderTicketModelSolo();
        orderTicketModelSolo.setOrder_id(savedOrder.getOrder_id());
        orderTicketModelSolo.setOrder_data(orderData);
        orderTicketModelSolo.setTicketList(tickets);

        // Return the constructed OrderTicketModel
        return orderTicketModelSolo;
    }

}
