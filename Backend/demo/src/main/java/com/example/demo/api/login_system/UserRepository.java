package com.example.demo.api.login_system;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository interface providing ORM methods to interact with the database for
 * the respective entity.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    User findByUsername(String username);

    // Add method to find by email
    User findByEmail(String email);
}
