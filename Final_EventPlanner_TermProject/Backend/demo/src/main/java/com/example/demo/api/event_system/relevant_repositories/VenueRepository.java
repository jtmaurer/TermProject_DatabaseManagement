package com.example.demo.api.event_system.relevant_repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.api.event_system.relevant_entities.Venue;

/**
 * Repository interface providing ORM methods to interact with the database for
 * the respective entity.
 */
@Repository
public interface VenueRepository extends JpaRepository<Venue, Integer> {
}