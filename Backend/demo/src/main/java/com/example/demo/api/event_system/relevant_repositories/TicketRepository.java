package com.example.demo.api.event_system.relevant_repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.api.event_system.relevant_entities.Ticket;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Integer> {

}