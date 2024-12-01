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

    // @OneToOne
    // @JoinColumn(name = "order_id", referencedColumnName = "order_id")
    // private Orders order_id;
    
    /**
     * Default constructor required for JPA entity instantiation.
     */
    public Payment(){
    }

    public Payment(Integer payment_id, String payment_method, Double amount, Orders order_id){
        this.payment_id = payment_id;
        this.payment_method = payment_method;
        this.amount = amount;
        // this.order_id = order_id;
    }
    
    public Integer getPayment_id() {
        return this.payment_id;
    }
    
    public String getPayment_method() {
        return this.payment_method;
    }

    public void setPayment_method(String payment_method) {
        this.payment_method = payment_method;
    }
    
    public Double getAmount() {
        return this.amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }
    
    // public Orders getOrder_id() {
    //     return this.order_id;
    // }

    // public void setOrder_id(Orders order_id) {
    //     this.order_id = order_id;
    // }
}