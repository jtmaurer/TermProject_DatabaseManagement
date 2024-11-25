package com.example.demo.api.event_system.relevant_entities;

import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

/**
 * Entity class representing a user login in the system.
 * This class is mapped to the "users_login" table in the database and stores user credentials.
 */
@Entity
@Table(name = "Event")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_id")
    private Integer event_id;

    @Column(name = "event_name") 
    private String event_name;

    @Column(name = "event_date")
    private Date event_date;

    @Column(name = "start_time")
    private Time start_time;

    @Column(name = "end_time")
    private Time end_time;

    @Column(name = "description") 
    private String description;

    @Column(name = "price")
    private Double price;

    @ManyToOne
    @JoinColumn(name = "venue_id", referencedColumnName = "venue_id")
    private Venue venue_id; // Link to the Venue entity

    /**
     * Default constructor required for JPA entity instantiation.
     */
    public Event(){
    }

    public Event(Integer event_id, String event_name, Date event_date, Time start_time, Time end_time, String description, Double price, Venue venue_id){
        this.event_id = event_id;
        this.event_name = event_name;
        this.event_date = event_date;
        this.start_time = start_time;
        this.end_time = end_time;
        this.description = description;
        this.price = price;
        this.venue_id = venue_id;
    }
}