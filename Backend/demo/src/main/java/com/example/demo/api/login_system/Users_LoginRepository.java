package com.example.demo.api.login_system;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository defines ORM methods to interact with database.
 */
@Repository
public interface Users_LoginRepository extends JpaRepository<Users_Login, Integer> {

    Users_Login findByUsername(String username);

    // Additional query methods can be defined here
}
