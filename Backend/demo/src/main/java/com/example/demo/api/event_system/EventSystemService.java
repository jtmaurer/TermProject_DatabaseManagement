package com.example.demo.api.event_system;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.sql.Date;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import java.util.stream.Collectors;
import com.example.demo.api.event_system.relevant_repositories.PaymentRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.api.event_system.relevant_entities.Event;
import com.example.demo.api.event_system.relevant_entities.OrderTicketList;
import com.example.demo.api.event_system.relevant_entities.OrderTicketModelSolo;
import com.example.demo.api.event_system.relevant_entities.Orders;
import com.example.demo.api.event_system.relevant_entities.Ticket;
import com.example.demo.api.event_system.relevant_entities.Venue;
import com.example.demo.api.event_system.relevant_entities.Payment;
import com.example.demo.api.event_system.relevant_repositories.EventRepository;
import com.example.demo.api.event_system.relevant_repositories.OrdersRepository;
import com.example.demo.api.event_system.relevant_repositories.TicketRepository;
import com.example.demo.api.event_system.relevant_repositories.VenueRepository;
import com.example.demo.api.login_system.User;
import com.example.demo.api.login_system.UserRepository;
import java.sql.Date;
import java.util.Map;

@Service
public class EventSystemService {

    
    @Autowired
    private VenueRepository venueRepository;
    @Autowired
    private PaymentRepository paymentRepository;
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
    @Autowired
    public EventSystemService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }


    public Object getEvents(String location, String date, Double price, Integer user_id, Boolean user_ordered_events) {
        Date sqlDate = date != null ? Date.valueOf(date) : null;
        if (user_ordered_events == true && user_id != null) {
            List<Map<String, Object>> raw_order_details = eventRepository.findUserOrderDetails(user_id);
            System.out.println(raw_order_details);
            return new OrderTicketList(raw_order_details);
        } else if (user_ordered_events == false && user_id != null) {
            return eventRepository.findEventsNotAssociatedWithUser(location, sqlDate, price, user_id);
        } else {
            return eventRepository.findEventsWithVenue(location, sqlDate, price);
        }
    }

    public int getRemainingCapacity(Integer id) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Event not found"));

        Venue venue = event.getVenue_id();
        if (venue == null) {
            throw new IllegalStateException("Venue not associated with the event");
        }

        long totalTicketsSold = ticketRepository.countByEventId(id);
        return (int) (venue.getCapacity() - totalTicketsSold);
    }







    public Payment getPaymentByOrder(Orders order) {
        // Use the correct repository method
        return paymentRepository.findByOrder(order);
    }

    public List<Map<String, Object>> getTickets(Integer userId) {
        List<Ticket> tickets = ticketRepository.findByUserId(userId);
        System.out.println("Tickets for user " + userId + ": " + tickets); // Log tickets

        return tickets.stream().map(ticket -> {
            Map<String, Object> ticketDetails = new HashMap<>();
            ticketDetails.put("ticket_id", ticket.getTicket_id());
            ticketDetails.put("seat_number", ticket.getSeat_number());
            ticketDetails.put("order_id", ticket.getOrder_id().getOrder_id());
            ticketDetails.put("event_id", ticket.getOrder_id().getEvent_id().getEvent_id());
            ticketDetails.put("event_name", ticket.getOrder_id().getEvent_id().getEvent_name());

            Payment payment = paymentRepository.findByOrder(ticket.getOrder_id());
            if (payment != null) {
                ticketDetails.put("payment_method", payment.getPayment_method());
                ticketDetails.put("price", payment.getAmount());
            }

            return ticketDetails;
        }).collect(Collectors.toList());
    }







    // Example usage in another method
    public void createPayment(Orders savedOrder, Double amount, String paymentMethod) {
        Payment payment = new Payment();
        payment.setOrder(savedOrder); // Correct setter method
        payment.setAmount(amount);
        payment.setPayment_method(paymentMethod);
        paymentRepository.save(payment);
    }



    public OrderTicketModelSolo createOrder(
            Date order_date,
            Integer number_of_tickets,
            Integer user_id,
            Integer event_id,
            Double amount,
            String payment_method
    ) {
        // Fetch related entities
        User user = userRepository.findById(user_id)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));
        Event event = eventRepository.findById(event_id)
                .orElseThrow(() -> new IllegalArgumentException("Event not found"));

        // Create Orders entity
        Orders order = new Orders();
        order.setOrder_date(order_date);
        order.setNumber_of_tickets(number_of_tickets);
        order.setUser_id(user);
        order.setEvent_id(event);

        // Save the order
        Orders savedOrder = ordersRepository.save(order);

        // Generate unique seat numbers
        List<Ticket> existingTickets = ticketRepository.findByEventId(event_id);
        int nextSeatNumber = existingTickets.size() + 1;

        // Create tickets for the order
        for (int i = 0; i < number_of_tickets; i++) {
            Ticket ticket = new Ticket();
            ticket.setOrder_id(savedOrder);
            ticket.setSeat_number("Seat-" + (nextSeatNumber + i)); // Ensure unique seat numbers
            ticketRepository.save(ticket);
        }

        // Create and save Payment entity (if required)
        if (amount != null && payment_method != null) {
            Payment payment = new Payment();
            payment.setAmount(amount);
            payment.setPayment_method(payment_method);
            payment.setOrder(savedOrder);
            paymentRepository.save(payment);
        }

        // Prepare the response
        OrderTicketModelSolo response = new OrderTicketModelSolo();
        response.setOrder_id(savedOrder.getOrder_id());
        response.setOrder_data(Map.of(
                "order_date", savedOrder.getOrder_date(),
                "number_of_tickets", savedOrder.getNumber_of_tickets(),
                "user", savedOrder.getUser_id().getUsername(),
                "event", savedOrder.getEvent_id().getEvent_name()
        ));

        return response;
    }






    // public void insertVenue() throws IOException {
    //     String imagePath = "../Venue_Images/columbus_civic_center.jpg";
    //     System.out.println("Current Working Directory: " + System.getProperty("user.dir"));
    //     System.out.println("**********************************************************************");

    //     Venue venue = new Venue();
    //     venue.setVenue_name("Columbus Civic Center");
    //     venue.set_location("Columbus, GA");
    //     venue.set_capacity(10600);
    //     venue.set_venue_id(5);

    //     // Read the image file into a byte array
    //     byte[] imageBytes = Files.readAllBytes(Path.of(imagePath));
    //     Byte[] boxedBytes = new Byte[imageBytes.length];
    //     for (int i = 0; i < imageBytes.length; i++) {
    //         boxedBytes[i] = imageBytes[i];
    //     }
    //     venue.set_image(boxedBytes);

    //     // Save the venue to the database (assuming venueRepository exists)
    //     venueRepository.save(venue);
    // }

}
