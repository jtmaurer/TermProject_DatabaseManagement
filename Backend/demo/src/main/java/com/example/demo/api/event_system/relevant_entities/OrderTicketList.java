package com.example.demo.api.event_system.relevant_entities;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * Class representing a list of order tickets derived from raw order details.
 * This organizes tickets into their respective orders.
 */
public class OrderTicketList {

    List<OrderTicketModel> order_data_list;

    /**
     * Constructor that initializes the order data list from raw order details.
     *
     * @param raw_order_details List of maps containing raw order and ticket
     * details.
     */
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

    /**
     * Parses ticket data from raw order details.
     *
     * @param entry Map containing ticket information.
     * @return Parsed Ticket object.
     */
    private Ticket parseTicket(Map<String, Object> entry) {
        Ticket ticket = new Ticket();
        ticket.setTicket_id((Integer) entry.get("ticket_id"));
        ticket.setSeat_number((String) entry.get("seat_number"));
        entry.remove("ticket_id");
        entry.remove("seat_number");
        return ticket;
    }

    /**
     * Retrieves the list of order data.
     *
     * @return List of OrderTicketModel objects.
     */
    public List<OrderTicketModel> getOrder_data_list() {
        return order_data_list;
    }

    /**
     * Class representing a single order and its associated tickets.
     */
    public class OrderTicketModel {

        private List<Ticket> tickets;
        private Map<String, Object> order_data;
        private Integer order_id;

        public OrderTicketModel() {
            tickets = new ArrayList<>();
        }

        /**
         * Adds a ticket to the order.
         *
         * @param ticket Ticket to be added.
         */
        public void addTicket(Ticket ticket) {
            tickets.add(ticket);
        }

        /**
         * Sets the ticket list for the order.
         *
         * @param tickets List of tickets.
         */
        public void setTicketList(List<Ticket> tickets) {
            this.tickets = tickets;
        }

        /**
         * Sets the order data.
         *
         * @param order_data Map containing order details.
         */
        public void setOrder_data(Map<String, Object> order_data) {
            this.order_data = order_data;
        }

        /**
         * Retrieves the order data.
         *
         * @return Map of order details.
         */
        public Map<String, Object> getOrder_data() {
            return order_data;
        }

        /**
         * Retrieves the order ID.
         *
         * @return Integer representing the order ID.
         */
        public Integer getOrder_id() {
            return order_id;
        }

        /**
         * Sets the order ID.
         *
         * @param order_id Order ID to set.
         */
        public void setOrder_id(Integer order_id) {
            this.order_id = order_id;
        }

        /**
         * Retrieves the list of tickets.
         *
         * @return List of Ticket objects.
         */
        public List<Ticket> getTickets() {
            return tickets;
        }
    }
}
