package com.example.demo.api.login_system;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import java.util.Map;
import java.util.HashMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;

/**
 * REST controller for managing login and registration operations. Provides
 * endpoints for user account creation and login functionality.
 */
@RestController
public class LoginSystemController {

    private LoginSystemService usersLoginService;

    /**
     * Constructor for the LoginSystemController class.
     *
     * @param usersLoginService The service instance for handling login system
     * operations.
     */
    @Autowired
    public LoginSystemController(LoginSystemService usersLoginService) {
        this.usersLoginService = usersLoginService;
    }

    /**
     * Endpoint to create a new user account.
     *
     * @param username The username for the new account.
     * @param password The password for the new account.
     * @return A {@link Users_Login} object representing the newly created user,
     * or null if the username is already taken.
     * @throws Exception If an error occurs during password hashing.
     */
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    public ResponseEntity<?> createAccount(@RequestBody Map<String, String> requestBody) throws Exception {
        String username = requestBody.get("username");
        String password = requestBody.get("password");
        String email = requestBody.get("email");

        if (username == null || password == null || email == null || username.isEmpty() || password.isEmpty() || email.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", "All fields are required"));
        }

        if (usersLoginService.findByUsername(username) != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", "Username already taken"));
        }

        String newSalt = usersLoginService.generateSalt();
        String hashedPassword = usersLoginService.hashPassword(password, newSalt);

        User newUser = usersLoginService.insertUsersLogin(
                usersLoginService.generateUsersLogin(username, email, hashedPassword, newSalt)
        );

        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of(
                "message", "User registered successfully",
                "userId", newUser.getUserId(),
                "username", newUser.getUsername()
        ));
    }

    /**
     * Endpoint to log in to an existing user account.
     *
     * @param username The username of the user trying to log in.
     * @param password The password of the user trying to log in.
     * @return A string indicating the result of the login attempt ("Login
     * Successful", "Username not found", or "Password incorrect").
     * @throws Exception If an error occurs during password hashing.
     */
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> requestBody) {
        String email = requestBody.get("email");
        String password = requestBody.get("password");

        try {
            // Find user by email instead of username
            User account = usersLoginService.findByEmail(email);
            if (account == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(Map.of("message", "Email not found."));
            }

            String hashedPassword = usersLoginService.hashPassword(password, account.getSalt());
            if (!hashedPassword.equals(account.getHashedPassword())) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(Map.of("message", "Password incorrect."));
            }

            return ResponseEntity.ok(Map.of(
                    "userId", account.getUserId(),
                    "username", account.getUsername()
            ));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "An error occurred: " + e.getMessage()));
        }
    }




    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/test")
    public Long getCount() {
        return usersLoginService.getCount();
    }
}
