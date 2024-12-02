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
 * Entity class representing an event in the system.
 * This class is mapped to the "Event" table in the database.
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

    @Column(name = "online")
    private Boolean online;

    @ManyToOne
    @JoinColumn(name = "venue_id", referencedColumnName = "venue_id")
    private Venue venue_id; // Link to the Venue entity

    /**
     * Default constructor required for JPA entity instantiation.
     */
    public Event() {
    }

    public Venue getVenue_id() {
        return venue_id;
    }



    public Event(Integer event_id, String event_name, Date event_date, Time start_time, Time end_time, String description, Double price, Boolean online, Venue venue_id) {
        this.event_id = event_id;
        this.event_name = event_name;
        this.event_date = event_date;
        this.start_time = start_time;
        this.end_time = end_time;
        this.description = description;
        this.price = price;
        this.online = online;
        this.venue_id = venue_id;
    }

    // Getter and Setter for event_id
    public Integer getEvent_id() {
        return event_id;
    }

    public void setEvent_id(Integer event_id) {
        this.event_id = event_id;
    }

    // Getter and Setter for event_name
    public String getEvent_name() {
        return event_name;
    }

    public void setEvent_name(String event_name) {
        this.event_name = event_name;
    }

    // Getter and Setter for event_date
    public Date getEvent_date() {
        return event_date;
    }

    public void setEvent_date(Date event_date) {
        this.event_date = event_date;
    }

    // Getter and Setter for start_time
    public Time getStart_time() {
        return start_time;
    }

    public void setStart_time(Time start_time) {
        this.start_time = start_time;
    }

    // Getter and Setter for end_time
    public Time getEnd_time() {
        return end_time;
    }

    public void setEnd_time(Time end_time) {
        this.end_time = end_time;
    }

    // Getter and Setter for description
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    // Getter and Setter for price
    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    // Getter and Setter for online
    public Boolean getOnline() {
        return online;
    }

    public void setOnline(Boolean online) {
        this.online = online;
    }

    // Getter and Setter for venue_id
    public String getVenueImage() {
        return venue_id != null ? venue_id.getImage() : null;
    }

    public void setVenue_id(Venue venue_id) {
        this.venue_id = venue_id;
    }


    @Override
    public String toString() {
        return "Event{" +
                "event_id=" + event_id +
                ", event_name='" + event_name + '\'' +
                ", event_date=" + event_date +
                ", start_time=" + start_time +
                ", end_time=" + end_time +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", online=" + online +
                ", venue_id=" + venue_id +
                '}';
    }
}
