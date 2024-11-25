package com.example.demo.api.event_system.relevant_entities;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public class OrderTicketList {

    List<OrderTicketModel> order_data_list;

    public OrderTicketList(List<Map<String, Object>> raw_order_details) {
        order_data_list = new ArrayList<>();

        for (Map<String, Object> entry : raw_order_details) {
            // Create a mutable copy of the immutable map
            Map<String, Object> mutableEntry = new HashMap<>(entry);

            Integer orderId = (Integer) mutableEntry.get("order_id");

            // Check if an OrderTicketModel for this order_id already exists in the list
            Optional<OrderTicketModel> existingOrder = order_data_list.stream()
                    .filter(order -> order.getOrder_id().equals(orderId))
                    .findFirst();

            if (existingOrder.isPresent()) {
                // If it exists, add the ticket to the existing OrderTicketModel
                existingOrder.get().addTicket(parseTicket(mutableEntry));
            } else {
                // If it doesn't exist, create a new OrderTicketModel
                OrderTicketModel newOrder = new OrderTicketModel();
                newOrder.setOrder_id(orderId);
                newOrder.setOrder_data(mutableEntry); // Add the full order data (first occurrence)
                newOrder.addTicket(parseTicket(mutableEntry)); // Add the ticket info
                order_data_list.add(newOrder);
            }
        }
    }

    // Helper method to parse ticket data from raw_order_details
    private Ticket parseTicket(Map<String, Object> entry) {
        Ticket ticket = new Ticket();
        ticket.setTicket_id((Integer) entry.get("ticket_id"));
        ticket.setSeat_number((String) entry.get("seat_number"));
        entry.remove("ticket_id");
        entry.remove("seat_number");
        return ticket;
    }

    public List<OrderTicketModel> getOrder_data_list() {
        return order_data_list;
    }

    public class OrderTicketModel {

        private List<Ticket> tickets;
        private Map<String, Object> order_data;
        private Integer order_id;

        public OrderTicketModel() {
            tickets = new ArrayList<>();
        }

        public void addTicket(Ticket ticket) {
            tickets.add(ticket);
        }

        public void setTicketList(List<Ticket> tickets) {
            this.tickets = tickets;
        }

        public void setOrder_data(Map<String, Object> order_data) {
            this.order_data = order_data;
        }

        public Map<String, Object> getOrder_data() {
            return order_data;
        }

        public Integer getOrder_id() {
            return order_id;
        }

        public void setOrder_id(Integer order_id) {
            this.order_id = order_id;
        }

        public List<Ticket> getTickets() {
            return tickets;
        }
    }
}
