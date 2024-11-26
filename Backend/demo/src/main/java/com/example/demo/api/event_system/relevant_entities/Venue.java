package com.example.demo.api.event_system.relevant_entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * Entity class representing a user login in the system.
 * This class is mapped to the "users_login" table in the database and stores user credentials.
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

    @Column(name = "image", columnDefinition = "LONGBLOB") // Storing the image in binary format
    private Byte[] image;

    /**
     * Default constructor required for JPA entity instantiation.
     */
    public Venue(){
    }

    public Venue(Integer venue_id, String venue_name, String location, Integer capacity, Byte[] image){
        this.venue_id = venue_id;
        this.venue_name = venue_name;
        this.location = location;
        this.capacity = capacity;
        this.image = image;
    }

    public void setVenue_name(String venue_name){
        this.venue_name=venue_name;
    }

    public void set_location(String location){
        this.location = location;
    }

    public void set_capacity(Integer capacity){
        this.capacity = capacity;
    }

    public void set_image(Byte[] image){
        this.image = image;
    }

    public void set_venue_id(Integer venue_id){
        this.venue_id = venue_id;
    }
}