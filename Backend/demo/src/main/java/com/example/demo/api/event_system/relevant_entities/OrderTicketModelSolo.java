package com.example.demo.api.event_system.relevant_entities;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class OrderTicketModelSolo {

    private List<Map<String,Object>> tickets;
    private Map<String, Object> order_data;
    private Integer order_id;

    public OrderTicketModelSolo() {
        tickets = new ArrayList<>();
    }

    // public void addTicket(Map<String,Object> ticket) {
    //     tickets.add(ticket);
    // }


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

    public List<Map<String,Object>> getTicketList() {
        return tickets;
    }
    
    public void setTicketList(List<Map<String,Object>> tickets) {
        this.tickets = tickets;
    }
}