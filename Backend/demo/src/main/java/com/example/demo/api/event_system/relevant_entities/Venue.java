package com.example.demo.api.event_system.relevant_entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * Entity class representing a venue in the system.
 * This class is mapped to the "Venue" table in the database.
 */
@Entity
@Table(name = "Venue")
public class Venue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "venue_id")
    private Integer venue_id;

    @Column(name = "venue_name")
    private String venue_name;

    @Column(name = "location")
    private String location;

    @Column(name = "capacity")
    private Integer capacity;

    @Column(name = "image", columnDefinition = "TEXT") // Storing the image URL as a string
    private String image;

    // Constructors
    public Venue() {
    }

    public Venue(Integer venue_id, String venue_name, String location, Integer capacity, String image) {
        this.venue_id = venue_id;
        this.venue_name = venue_name;
        this.location = location;
        this.capacity = capacity;
        this.image = image;
    }

    // Getters
    public Integer getVenue_id() {
        return venue_id;
    }

    public String getVenue_name() {
        return venue_name;
    }

    public String getLocation() {
        return location;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public String getImage() {
        return image;
    }

    // Setters
    public void setVenue_id(Integer venue_id) {
        this.venue_id = venue_id;
    }

    public void setVenue_name(String venue_name) {
        this.venue_name = venue_name;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
