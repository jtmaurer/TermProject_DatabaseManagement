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
@Table(name = "users_login")
public class Users_Login {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "username", nullable = false, unique = true, length = 50)
    private String username;

    @Column(name = "hashed_password", nullable = false, length = 255)
    private String hashed_password;

    @Column(name = "salt", nullable = false, length = 255)
    private String salt;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    /**
     * Default constructor required for JPA entity instantiation.
     */
    public Users_Login(){
    }

    /**
     * Parameterized constructor
     * @param userId
     * @param username
     * @param hashed_password
     * @param salt
     * @param createdAt
     */
    public Users_Login(Integer userId, String username, String hashed_password, String salt, LocalDateTime createdAt){
        this.userId = userId;
        this.username = username;
        this.hashed_password = hashed_password;
        this.salt = salt;
        this.createdAt = createdAt;
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
