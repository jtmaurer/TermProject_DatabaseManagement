-- Create the 'users_login' table
CREATE TABLE IF NOT EXISTS users_login (
    user_id INT AUTO_INCREMENT PRIMARY KEY, -- Unique user identifier
    username VARCHAR(50) NOT NULL UNIQUE,   -- Unique username
    hashed_password VARCHAR(255) NOT NULL,         -- Hashed password
    salt VARCHAR(255) NOT NULL,             -- Salt used for password hashing
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Record creation time
);

-- Insert dummy data
INSERT INTO users_login (username, hashed_password, salt) VALUES
('john_doe', 'hashedpassword123', 'randomsalt1'),
('jane_doe', 'hashedpassword456', 'randomsalt2'),
('user_test', 'hashedpassword789', 'randomsalt3');
