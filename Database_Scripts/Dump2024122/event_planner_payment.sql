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
  PRIMARY KEY (`payment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,300,'Credit Card'),(2,300,'PayPal'),(3,600,'Credit Card'),(4,25,'Debit Card'),(5,30,'PayPal'),(6,45,'Credit Card'),(7,150,'Debit Card'),(8,100,'Credit Card'),(9,90,'PayPal'),(10,150,'Credit Card'),(11,300,'Debit Card'),(12,300,'PayPal'),(13,600,'Credit Card'),(14,25,'Debit Card'),(15,30,'PayPal'),(16,45,'Credit Card'),(17,150,'Debit Card'),(18,100,'Credit Card'),(19,90,'PayPal'),(20,150,'Credit Card'),(21,300,'Debit Card'),(22,300,'PayPal'),(23,600,'Credit Card'),(24,25,'Debit Card'),(25,30,'PayPal'),(26,45,'Credit Card'),(27,150,'Debit Card'),(28,100,'Credit Card'),(29,90,'PayPal'),(30,150,'Credit Card'),(31,300,'Debit Card'),(32,300,'PayPal'),(33,600,'Credit Card'),(34,25,'Debit Card'),(35,30,'PayPal'),(36,45,'Credit Card'),(37,150,'Debit Card'),(38,100,'Credit Card'),(39,90,'PayPal'),(40,150,'Credit Card'),(41,300,'Debit Card'),(42,300,'PayPal'),(43,600,'Credit Card'),(44,25,'Debit Card'),(45,30,'PayPal'),(46,45,'Credit Card'),(47,150,'Debit Card'),(48,100,'Credit Card'),(49,90,'PayPal'),(50,150,'Credit Card'),(51,200,'Paypal'),(53,200,'Paypal'),(54,200,'Paypal'),(55,200,'Paypal'),(56,300,'Credit Card'),(57,450,'Credit Card'),(58,450,'Credit Card'),(59,0,'PayPal'),(60,25,'Credit Card');
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

-- Dump completed on 2024-12-02 17:19:25
