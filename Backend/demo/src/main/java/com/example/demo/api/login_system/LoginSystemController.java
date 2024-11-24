package com.example.demo.api.login_system;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

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
     * @return A {@link Users_Login} object representing the newly created user, or null if the username is already taken.
     * @throws Exception If an error occurs during password hashing.
     */
    @GetMapping("/register")
    public Users_Login createAccount(String username, String password) throws Exception {
        if (usersLoginService.findByUsername(username) != null) {
            return null; //Username already taken
        }
        String new_salt = usersLoginService.generateSalt();

        String hashed_password = usersLoginService.hashPassword(password, new_salt);
        // return usersLoginService.generateUsersLogin(username, hashed_password, new_salt);
        return usersLoginService.insertUsersLogin(usersLoginService.generateUsersLogin(username, hashed_password, new_salt));
    }

    /**
     * Endpoint to log in to an existing user account.
     *
     * @param username The username of the user trying to log in.
     * @param password The password of the user trying to log in.
     * @return A string indicating the result of the login attempt ("Login Successful", "Username not found", or "Password incorrect").
     * @throws Exception If an error occurs during password hashing.
     */
    @GetMapping("/login")
    public String login(String username, String password) throws Exception {
        Users_Login account = usersLoginService.findByUsername(username);
        if (account == null) {
            return "Username not found"; //Username already taken
        }

        String hashed_password = usersLoginService.hashPassword(password, account.getSalt());

        if (hashed_password.equals(account.getHashedPassword())) {
            return "Login Successful: " + account.getUsername();
        } else {
            return "Password incorrect";
        }
    }
}
