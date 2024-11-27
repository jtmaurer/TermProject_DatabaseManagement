-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: event_planner
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `event_id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `event_date` date DEFAULT NULL,
  `event_name` varchar(255) DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `venue_id` int DEFAULT NULL,
  `price` double DEFAULT NULL,
  PRIMARY KEY (`event_id`),
  KEY `FKthgbmd6s6hp4l47kx1sh4cf9n` (`venue_id`),
  CONSTRAINT `FKthgbmd6s6hp4l47kx1sh4cf9n` FOREIGN KEY (`venue_id`) REFERENCES `venue` (`venue_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (1,'Experience the magic of Broadway in Atlanta.','22:00:00','2024-12-01','Broadway Show: The Lion King','19:00:00',1,150),(2,'Annual tech conference featuring top innovators.','17:00:00','2024-12-05','Tech Conference 2024','09:00:00',2,300),(3,'A festive evening with dinner and dancing.','23:30:00','2024-12-08','Holiday Gala','18:30:00',3,200),(4,'Enjoy local crafts, food, and holiday cheer.','20:00:00','2024-12-10','Savannah Christmas Market','10:00:00',4,25),(5,'Family-friendly holiday event with activities.','22:00:00','2024-12-12','Columbus Winter Wonderland','12:00:00',5,15),(6,'Laugh the night away with top comedians.','23:00:00','2024-12-15','Comedy Night','20:00:00',1,50),(7,'Pitch your ideas to leading investors.','16:00:00','2024-12-17','Startup Pitch Day','09:00:00',2,100),(8,'Local art showcase with live music.','18:00:00','2024-12-20','Athens Art Festival','11:00:00',3,10),(9,'Walk through a dazzling display of lights.','22:00:00','2024-12-22','Savannah Holiday Lights','17:30:00',4,20),(10,'Ring in the new year with live music and fireworks.','01:00:00','2024-12-31','Columbus New Year Celebration','21:00:00',5,75),(11,'A night of classical music and holiday favorites.','22:00:00','2024-12-02','Atlanta Symphony Orchestra Holiday Concert','19:30:00',1,60),(12,'Explore the latest in robotics innovation.','15:00:00','2024-12-03','Georgia Tech Robotics Expo','10:00:00',2,20),(13,'Shop handmade gifts and crafts.','16:00:00','2024-12-04','Winter Wonderland Craft Fair','09:00:00',3,5),(14,'Savor the best of local cuisine and wine.','20:00:00','2024-12-06','Savannah Food and Wine Festival','11:00:00',4,75),(15,'Enjoy carnival rides, games, and treats.','18:00:00','2024-12-07','Columbus Christmas Carnival','10:00:00',5,30),(16,'A magical ballet performance for the holidays.','21:30:00','2024-12-09','Atlanta Ballet Nutcracker','19:00:00',1,85),(17,'Discuss the latest in cybersecurity trends.','17:00:00','2024-12-11','Cybersecurity Summit','08:30:00',2,250),(18,'Showcasing independent and local films.','23:00:00','2024-12-13','Athens Winter Film Festival','18:00:00',3,15),(19,'An evening of smooth jazz and great vibes.','23:00:00','2024-12-14','Savannah Jazz Night','20:00:00',4,50),(20,'Spectacular ice skating performances.','19:00:00','2024-12-16','Columbus Ice Skating Extravaganza','15:00:00',5,40),(21,'Find unique gifts and holiday goods.','18:00:00','2024-12-18','Atlanta Holiday Pop-Up Market','10:00:00',1,10),(22,'Solve real-world challenges with code.','20:00:00','2024-12-19','Tech for Tomorrow Hackathon','08:00:00',2,30),(23,'Beautiful choral renditions of holiday classics.','20:00:00','2024-12-21','Athens Holiday Choral Performance','17:00:00',3,25),(24,'Watch festive boats light up the night.','21:00:00','2024-12-23','Savannah Holiday Boat Parade','18:00:00',4,35),(25,'A family-friendly Christmas theatrical production.','17:00:00','2024-12-24','Columbus Christmas Play','15:00:00',5,20),(26,'Celebrate the new year with music and drinks.','02:00:00','2024-12-31','Atlanta New Year Countdown Party','20:00:00',1,100),(27,'Discuss the impact of AI in various industries.','17:00:00','2024-12-26','Future of AI Conference','09:00:00',2,200),(28,'A showcase of amazing science projects.','16:00:00','2024-12-27','Athens Science Fair','10:00:00',3,10),(29,'Celebrate the work of talented artists.','18:00:00','2024-12-28','Savannah Fine Arts Showcase','11:00:00',4,15),(30,'Enjoy live performances by various artists.','22:00:00','2024-12-29','Columbus Winter Concert Series','19:00:00',5,50);
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-27  8:15:31
