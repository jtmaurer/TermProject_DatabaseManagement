package com.example.demo.api.event_system.relevant_entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Payment")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_id")
    private Integer payment_id;

    @Column(name = "payment_method")
    private String payment_method;

    @Column(name = "amount")
    private Double amount;

    @OneToOne
    @JoinColumn(name = "order_id", referencedColumnName = "order_id")
    private Orders order;


    // Default constructor
    public Payment() {}


    public Payment(Integer payment_id, String payment_method, Double amount, Orders order) {
        this.payment_id = payment_id;
        this.payment_method = payment_method;
        this.amount = amount;
        this.order = order; // Use the correct field name
    }

    // Getters and Setters
    public Integer getPayment_id() {
        return payment_id;
    }

    public void setPayment_id(Integer payment_id) {
        this.payment_id = payment_id;
    }

    public String getPayment_method() {
        return payment_method;
    }

    public void setPayment_method(String payment_method) {
        this.payment_method = payment_method;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public Orders getOrder() { // Correct getter name
        return order;
    }

    public void setOrder(Orders order) { // Correct setter name
        this.order = order;
    }
}
