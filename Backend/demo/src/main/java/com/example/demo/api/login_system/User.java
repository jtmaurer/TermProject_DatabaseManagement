package com.example.demo.api.login_system;

import java.time.LocalDateTime;

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
@Table(name = "User")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "username", nullable = false, unique = true, length = 50)
    private String username;

    @Column(name = "email")
    private String email;
    
    @Column(name = "role")
    private String role;

    @Column(name = "hashed_password", nullable = false, length = 255)
    private String hashed_password;

    @Column(name = "salt", nullable = false, length = 255)
    private String salt;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    /**
     * Default constructor required for JPA entity instantiation.
     */
    public User(){
    }

    /**
     * Parameterized constructor
     * @param userId
     * @param username
     * @param hashed_password
     * @param salt
     * @param createdAt
     */
    public User(Integer userId, String username, String hashed_password, String salt, LocalDateTime createdAt, String role, String email){
        this.userId = userId;
        this.username = username;
        this.hashed_password = hashed_password;
        this.salt = salt;
        this.createdAt = createdAt;
        this.role = role;
        this.email = email;
    }

    // Getters and setters

    public Integer getUserId() {
        return userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getSalt() {
        return salt;
    }

    public String getHashedPassword(){
        return this.hashed_password;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}
