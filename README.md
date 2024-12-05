Link for Demo: https://www.youtube.com/watch?v=FEtOobGoKks

# Steps to Setup and Run Event Planner Project

## Requirements

Node.js, Java, MVN, MySQL Workbench, MySQL Server on port 3306

## Setup and Run Frontend

### In your terminal, navigate to /Frontend_App/ and enter:

npm i

### Then enter:

npm run dev 

## Setup and Run Backend API

### Open MySQL Workbench and open a new SQL File Terminal, run this SQL Script:

CREATE DATABASE event_planner;

### In the code base, navigate to this file: 

\Backend\demo\src\main\resources\application.properties

### And be sure that all of these properties are correct:

spring.datasource.url=jdbc:mysql://localhost:3306/event_planner?useSSL=false&allowPublicKeyRetrieval=true <br>
spring.datasource.username=root<br>
spring.datasource.password=password123<br>

### Start a new terminal, and navigate to /Backend/demo/ and enter:

mvn clean install

### Then enter:

mvn clean spring-boot:run

## You are good to go! Open localhost:3000, and create a new admin account to create events, then create a non admin account to buy tickets.
## Refer to the video on how to do this.
