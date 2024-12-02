package com.example.demo.api.login_system;

import java.time.LocalDateTime;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

/**
 * Business Logic/Service class for managing login-related operations, including user authentication,
 * password hashing, and JSON Web Token (JWT) handling.
 */
@Service
public class LoginSystemService {

    @Value("${jwt.secret}")
    private String secret_key;

    @Autowired
    private UserRepository userRepository;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    /**
     * Default constructor for the LoginSystemService class.
     */
    public LoginSystemService() {

    }

    /**
     * Finds a user by their username in the database.
     *
     * @param username The username of the user to find.
     * @return The User entity corresponding to the given username, or null if not found.
     */
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public Long getCount() {
        return userRepository.count();
    }

    /**
     * Hashes a password using BCrypt.
     *
     * @param password The password to hash.
     * @return The BCrypt hashed password.
     */
    public static String hashPassword(String password) {
        return encoder.encode(password);
    }

    /**
     * Verifies a plain password against a stored hashed password.
     *
     * @param plainPassword The plain password.
     * @param hashedPassword The hashed password stored in the database.
     * @return True if the password matches, otherwise false.
     */
    public static boolean verifyPassword(String plainPassword, String hashedPassword) {
        return encoder.matches(plainPassword, hashedPassword);
    }

    /**
     * Creates a new User entity with the provided username, hashed password, and email.
     *
     * @param username The username of the user.
     * @param email The email of the user.
     * @param hashedPassword The hashed password of the user.
     * @return A User object containing the user details.
     */
    public User generateUsersLogin(String username, String email, String hashedPassword) {
        // Assuming the constructor requires `salt`, adjust accordingly.
        return new User((int) userRepository.count() + 1, username, hashedPassword, "", LocalDateTime.now(), "user", email);
    }

    /**
     * Inserts a User entity into the database.
     *
     * @param user The User object to save.
     * @return The saved User object.
     */
    public User insertUsersLogin(User user) {
        return userRepository.save(user);
    }

    /**
     * Generates a JSON Web Token (JWT) for the given username and role.
     *
     * @param username The username of the user.
     * @param role     The role of the user (e.g., admin, user).
     * @return A signed JWT as a string.
     */
    public String generateToken(String username, String role) {
        long currentTimeMillis = System.currentTimeMillis();
        long expirationTimeMillis = currentTimeMillis + (1000 * 60 * 60); // 1 hour expiry

        return Jwts.builder()
                .setSubject(username) // Add username to the payload
                .claim("role", role) // Add the role as a custom claim
                .setIssuedAt(new Date(currentTimeMillis)) // Token creation time
                .setExpiration(new Date(expirationTimeMillis)) // Token expiration time
                .signWith(Keys.hmacShaKeyFor(secret_key.getBytes()), SignatureAlgorithm.HS256) // Sign with the secret key
                .compact(); // Build the token
    }

    /**
     * Validates a given JSON Web Token (JWT) and extracts its claims.
     *
     * @param token The JWT to validate.
     * @return Username string
     * @throws io.jsonwebtoken.JwtException If the token is invalid or expired.
     */
    public String validateToken(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(Keys.hmacShaKeyFor(secret_key.getBytes()))
                .build()
                .parseClaimsJws(token)
                .getBody();

        String username = claims.getSubject();
        String role = claims.get("role", String.class);
        System.out.println("Username: " + username);
        System.out.println("Role: " + role);

        return username;
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
