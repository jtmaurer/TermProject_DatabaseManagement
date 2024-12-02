package com.example.demo.api.event_system.relevant_repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.api.event_system.relevant_entities.Payment;
import com.example.demo.api.event_system.relevant_entities.Orders;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {

    // Use the correct field name
    Payment findByOrder(Orders order);
}
