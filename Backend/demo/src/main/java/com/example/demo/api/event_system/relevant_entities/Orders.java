package com.example.demo.api.event_system.relevant_entities;

import java.sql.Date;

import com.example.demo.api.login_system.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

/**
 * Entity class representing a user login in the system.
 * This class is mapped to the "users_login" table in the database and stores user credentials.
 */
@Entity
@Table(name = "Orders")
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Integer order_id;

    @Column(name = "order_date") 
    private Date order_date;

    @Column(name = "number_of_tickets")
    private Integer number_of_tickets;
    
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User user_id;

    @ManyToOne
    @JoinColumn(name = "event_id", referencedColumnName = "event_id")
    private Event event_id;
    
    @OneToOne
    @JoinColumn(name = "payment_id", referencedColumnName = "payment_id")
    private Payment payment_id; //For now atleast

    /**
     * Default constructor required for JPA entity instantiation.
     */
    public Orders(){
    }

    public Orders(Integer order_id, Date order_date, Integer number_of_tickets, User user_id, Event event_id, Payment payment_id){
        this.event_id = event_id;
        this.user_id = user_id;
        this.number_of_tickets = number_of_tickets;
        this.order_date = order_date;
        this.order_id = order_id;
        this.payment_id = payment_id;
    }

    public Integer getOrder_id() {
        return order_id;
    }

    public void setOrder_id(Integer order_id) {
        this.order_id = order_id;
    }

    public Date getOrder_date() {
        return order_date;
    }

    public void setOrder_date(Date order_date) {
        this.order_date = order_date;
    }

    public Integer getNumber_of_tickets() {
        return number_of_tickets;
    }

    public void setNumber_of_tickets(Integer number_of_tickets) {
        this.number_of_tickets = number_of_tickets;
    }

    public User getUser_id() {
        return user_id;
    }

    public void setUser_id(User user_id) {
        this.user_id = user_id;
    }

    public Event getEvent_id() {
        return event_id;
    }

    public void setEvent_id(Event event_id) {
        this.event_id = event_id;
    }
    
    public Payment getPayment_id() {
        return this.payment_id;
    }
    
    public void setPayment_id(Payment payment_id) {
        this.payment_id = payment_id;
    }
}