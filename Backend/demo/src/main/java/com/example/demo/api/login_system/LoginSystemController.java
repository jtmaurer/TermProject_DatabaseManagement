package com.example.demo.api.login_system;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST controller for managing user registration and login operations.
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginSystemController {

    private LoginSystemService usersLoginService;

    @Autowired
    public LoginSystemController(LoginSystemService usersLoginService) {
        this.usersLoginService = usersLoginService;
    }

    /**
     * Registers a new user account.
     *
     * @param requestBody Map containing username, password, and email.
     * @return ResponseEntity with registration result.
     */
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    public ResponseEntity<?> createAccount(@RequestBody Map<String, String> requestBody) {
        String username = requestBody.get("username");
        String password = requestBody.get("password");
        String email = requestBody.get("email");

        if (username == null || password == null || email == null || username.isEmpty() || password.isEmpty() || email.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", "All fields are required"));
        }

        // Check if username already exists
        if (usersLoginService.findByUsername(username) != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", "Username already taken"));
        }

        // Check if email already exists
        if (usersLoginService.findByEmail(email) != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", "Email already registered"));
        }

        String hashedPassword = usersLoginService.hashPassword(password);

        User newUser = usersLoginService.insertUsersLogin(
                usersLoginService.generateUsersLogin(username, email, hashedPassword)
        );

        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of(
                "message", "User registered successfully",
                "userId", newUser.getUserId(),
                "username", newUser.getUsername()
        ));
    }

    /**
     * Logs in a user.
     *
     * @param requestBody Map containing email and password.
     * @return ResponseEntity with login result.
     */
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> requestBody) {
        String email = requestBody.get("email");
        String password = requestBody.get("password");

        User account = usersLoginService.findByEmail(email);
        if (account == null) {
            System.out.println("Email not found in database: " + email);
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "Email not found."));
        }

        if (!usersLoginService.verifyPassword(password, account.getHashedPassword())) {
            System.out.println("Incorrect password for email: " + email);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Password incorrect."));
        }

        System.out.println("Successful login: " + account.getEmail());

        return ResponseEntity.ok(Map.of(
                "userId", account.getUserId(),
                "username", account.getUsername(),
                "email", account.getEmail()
        ));
    }

    /**
     * Retrieves details of a user by email.
     *
     * @param email Email of the user to retrieve.
     * @return ResponseEntity with user details.
     */
    @GetMapping("/user-details")
    public ResponseEntity<?> getUserDetails(@RequestParam String email) {
        User account = usersLoginService.findByEmail(email);
        if (account == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "User not found."));
        }

        return ResponseEntity.ok(Map.of(
                "username", account.getUsername(),
                "email", account.getEmail()
        ));
    }
}
