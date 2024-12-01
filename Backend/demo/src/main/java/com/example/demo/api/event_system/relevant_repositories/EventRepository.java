package com.example.demo.api.event_system.relevant_repositories;

import java.sql.Date;
import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.api.event_system.relevant_entities.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {

    @Query(value = "SELECT * FROM event NATURAL JOIN venue "
            + "WHERE (:location IS NULL OR location = :location) "
            + "AND (:event_date IS NULL OR event_date = :event_date) "
            + "AND (:price IS NULL OR price <= :price) "
            + "LIMIT 10", nativeQuery = true)
    List<Map<String, Object>> findEventsWithVenue(
            @Param("location") String location,
            @Param("event_date") Date event_date,
            @Param("price") Double price
    );

    @Query(value = "SELECT e.*, v.* "
            + "FROM event e "
            + "JOIN venue v ON e.venue_id = v.venue_id "
            + "WHERE e.event_id NOT IN ("
            + "    SELECT o.event_id "
            + "    FROM orders o "
            + "    WHERE o.user_id = :user_id"
            + ") "
            + "AND (:location IS NULL OR location = :location) "
            + "AND (:event_date IS NULL OR event_date = :event_date) "
            + "AND (:price IS NULL OR price <= :price) "
            + "LIMIT 10", nativeQuery = true)
    List<Map<String, Object>> findEventsNotAssociatedWithUser(
            @Param("location") String location,
            @Param("event_date") Date event_date,
            @Param("price") Double price,
            @Param("user_id") int user_id);

    @Query(value = "SELECT e.*, v.* "
            + "FROM event e "
            + "JOIN venue v ON e.venue_id = v.venue_id "
            + "WHERE e.event_id IN ("
            + "    SELECT o.event_id "
            + "    FROM orders o "
            + "    WHERE o.user_id = :user_id"
            + ") ", nativeQuery = true)
    List<Map<String, Object>> findUserEvents(@Param("user_id") int user_id);

    @Query(value = "SELECT * "
            + "FROM event e "
            + "NATURAL JOIN venue "
            + "NATURAL JOIN orders "
            + "NATURAL JOIN ticket "
        //     + "NATURAL JOIN payment "
            + "WHERE orders.user_id = :user_id", nativeQuery = true)
    List<Map<String, Object>> findUserOrderDetails(@Param("user_id") int userId);

}
