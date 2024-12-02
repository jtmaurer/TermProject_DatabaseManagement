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
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `amount` double DEFAULT NULL,
  `payment_method` varchar(255) DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  PRIMARY KEY (`payment_id`),
  KEY `FKlouu98csyullos9k25tbpk4va` (`order_id`),
  CONSTRAINT `FKlouu98csyullos9k25tbpk4va` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,300,'Credit Card',1),(2,300,'PayPal',2),(3,600,'Credit Card',3),(4,25,'Debit Card',4),(5,30,'PayPal',5),(6,45,'Credit Card',6),(7,150,'Debit Card',7),(8,100,'Credit Card',8),(9,90,'PayPal',9),(10,150,'Credit Card',10),(11,300,'Debit Card',11),(12,300,'PayPal',12),(13,600,'Credit Card',13),(14,25,'Debit Card',14),(15,30,'PayPal',15),(16,45,'Credit Card',16),(17,150,'Debit Card',17),(18,100,'Credit Card',18),(19,90,'PayPal',19),(20,150,'Credit Card',20),(21,300,'Debit Card',21),(22,300,'PayPal',22),(23,600,'Credit Card',23),(24,25,'Debit Card',24),(25,30,'PayPal',25),(26,45,'Credit Card',26),(27,150,'Debit Card',27),(28,100,'Credit Card',28),(29,90,'PayPal',29),(30,150,'Credit Card',30),(31,300,'Debit Card',31),(32,300,'PayPal',32),(33,600,'Credit Card',33),(34,25,'Debit Card',34),(35,30,'PayPal',35),(36,45,'Credit Card',36),(37,150,'Debit Card',37),(38,100,'Credit Card',38),(39,90,'PayPal',39),(40,150,'Credit Card',40),(41,300,'Debit Card',41),(42,300,'PayPal',42),(43,600,'Credit Card',43),(44,25,'Debit Card',44),(45,30,'PayPal',45),(46,45,'Credit Card',46),(47,150,'Debit Card',47),(48,100,'Credit Card',48),(49,90,'PayPal',49),(50,150,'Credit Card',50);
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-27  8:15:32
