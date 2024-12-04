package com.example.demo.api.event_system.relevant_repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.api.event_system.relevant_entities.Ticket;

/**
 * Repository interface providing ORM methods to interact with the database for
 * the respective entity.
 */
@Repository
public interface TicketRepository extends JpaRepository<Ticket, Integer> {

    @Query("SELECT COUNT(t) FROM Ticket t JOIN t.order_id o WHERE o.event_id.event_id = :eventId")
    int countByEventId(@Param("eventId") Integer eventId);

    @Query("SELECT t FROM Ticket t JOIN t.order_id o WHERE o.user_id.id = :userId")
    List<Ticket> findByUserId(@Param("userId") Integer userId);

    @Query("SELECT t FROM Ticket t JOIN t.order_id o WHERE o.event_id.event_id = :eventId")
    List<Ticket> findByEventId(@Param("eventId") Integer eventId);
}
