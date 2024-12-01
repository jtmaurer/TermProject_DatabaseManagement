package com.example.demo.api.login_system;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.Base64;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

/**
 * Business Logic/Service class for managing login-related operations, including user authentication,
 * password hashing, salt generation, and JSON Web Token (JWT) handling.
 */
@Service
public class LoginSystemService {

    @Value("${jwt.secret}")
    private String secret_key;

    @Autowired
    private UserRepository userRepository;

    /**
     * Default constructor for the LoginSystemService class.
     */
    public LoginSystemService() {

    }

    /**
     * Finds a user by their username in the database.
     *
     * @param username The username of the user to find.
     * @return The Users_Login entity corresponding to the given username, or null if not found.
     */
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public Long getCount(){
        return userRepository.count();
    }

    /**
     * Generates a random salt for password hashing using SecureRandom.
     *
     * @return A Base64-encoded string representation of the generated salt.
     */
    public static String generateSalt() {
        // SecureRandom instance
        SecureRandom secureRandom = new SecureRandom();

        // Create a byte array for the salt
        byte[] salt = new byte[16];

        // Generate random bytes
        secureRandom.nextBytes(salt);

        // Return the salt as a Base64-encoded string
        return Base64.getEncoder().encodeToString(salt);
    }

    /**
     * Hashes a password using SHA-256 with the provided salt.
     *
     * @param password The password to hash.
     * @param salt     The salt to combine with the password.
     * @return A Base64-encoded string representation of the hashed password.
     * @throws Exception If the SHA-256 algorithm is not available.
     */
    public static String hashPassword(String password, String salt) throws Exception {
        // Concatenate salt and password
        String saltedPassword = salt + password;

        // Use SHA-256 hashing algorithm
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] hash = digest.digest(saltedPassword.getBytes(StandardCharsets.UTF_8));

        // Return the hash as a Base64-encoded string
        return Base64.getEncoder().encodeToString(hash);
    }

    /**
     * Creates a new Users_Login entity with the provided username, hashed password, and salt.
     *
     * @param username        The username of the user.
     * @param hashed_password The hashed password of the user.
     * @param salt            The salt used for hashing the password.
     * @return A Users_Login object containing the user details.
     */
    public User generateUsersLogin(String username, String email, String hashed_password, String salt) {
        return new User((int) userRepository.count() + 1, username, hashed_password, salt, LocalDateTime.now(), "user", email);
    }

    /**
     * Inserts a Users_Login entity into the database.
     *
     * @param users_login The Users_Login object to save.
     * @return The saved Users_Login object.
     */
    public User insertUsersLogin(User users_login) {
        return userRepository.save(users_login);
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
                .signWith(Keys.hmacShaKeyFor(secret_key.getBytes()), SignatureAlgorithm.HS256) // Sign with the secret key, after converting the key to key object
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
                .requireAudience("string")
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
