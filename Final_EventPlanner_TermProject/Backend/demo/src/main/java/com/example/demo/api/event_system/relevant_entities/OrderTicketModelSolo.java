package com.example.demo.api.event_system.relevant_entities;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Class representing a single order along with associated tickets, stored as
 * maps.
 */
public class OrderTicketModelSolo {

    private List<Map<String, Object>> tickets;
    private Map<String, Object> order_data;
    private Integer order_id;

    public OrderTicketModelSolo() {
        tickets = new ArrayList<>();
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
     * @return Map containing order details.
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
     * @param order_id Integer representing the order ID.
     */
    public void setOrder_id(Integer order_id) {
        this.order_id = order_id;
    }

    /**
     * Retrieves the list of ticket details.
     *
     * @return List of maps containing ticket details.
     */
    public List<Map<String, Object>> getTicketList() {
        return tickets;
    }

    /**
     * Sets the list of ticket details.
     *
     * @param tickets List of maps containing ticket details.
     */
    public void setTicketList(List<Map<String, Object>> tickets) {
        this.tickets = tickets;
    }
}
