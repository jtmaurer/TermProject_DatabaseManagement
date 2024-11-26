package com.example.demo.api.event_system.relevant_entities;

import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.*;

@Entity
@Table(name = "Event")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_id")
    private Integer id; // Matches `id` in frontend

    @Column(name = "event_name")
    private String eventname; // Matches `Eventname` in frontend

    @Column(name = "event_date")
    private Date date; // Matches `date` in frontend

    @Column(name = "start_time")
    private Time startTime; // Matches `startTime` in frontend

    @Column(name = "end_time")
    private Time endTime; // Matches `endTime` in frontend

    @Column(name = "description")
    private String description; // Matches `description` in frontend

    @Column(name = "event_img")
    private String eventImg; // Matches `eventImg` in frontend

    @Column(name = "is_online")
    private Boolean online; // Matches `Online` in frontend

    @ManyToOne
    @JoinColumn(name = "venue_id", referencedColumnName = "venue_id")
    private Venue venueID; // Matches `venueID` in frontend

    public Event() {}

    public Event(Integer id, String eventname, Date date, Time startTime, Time endTime,
                 String description, String eventImg, Boolean online, Venue venueID) {
        this.id = id;
        this.eventname = eventname;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.description = description;
        this.eventImg = eventImg;
        this.online = online;
        this.venueID = venueID;
    }

    // Getters and Setters for all fields

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEventname() {
        return eventname;
    }

    public void setEventname(String eventname) {
        this.eventname = eventname;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Time getStartTime() {
        return startTime;
    }

    public void setStartTime(Time startTime) {
        this.startTime = startTime;
    }

    public Time getEndTime() {
        return endTime;
    }

    public void setEndTime(Time endTime) {
        this.endTime = endTime;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEventImg() {
        return eventImg;
    }

    public void setEventImg(String eventImg) {
        this.eventImg = eventImg;
    }

    public Boolean getOnline() {
        return online;
    }

    public void setOnline(Boolean online) {
        this.online = online;
    }

    public Venue getVenueID() {
        return venueID;
    }

    public void setVenueID(Venue venueID) {
        this.venueID = venueID;
    }
}
