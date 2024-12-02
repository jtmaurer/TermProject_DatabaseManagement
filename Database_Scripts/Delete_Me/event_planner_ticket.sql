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
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket` (
  `ticket_id` int NOT NULL AUTO_INCREMENT,
  `seat_number` varchar(255) DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  PRIMARY KEY (`ticket_id`),
  KEY `FKfxop4bl4yxuwgij2pa9ghtal6` (`order_id`),
  CONSTRAINT `FKfxop4bl4yxuwgij2pa9ghtal6` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
INSERT INTO `ticket` VALUES (1,'A1',1),(2,'A2',1),(3,'B1',2),(4,'C1',3),(5,'C2',3),(6,'C3',3),(7,'D1',4),(8,'E1',5),(9,'E2',5),(10,'F1',6),(11,'F2',6),(12,'F3',6),(13,'G1',7),(14,'H1',8),(15,'H2',8),(16,'I1',9),(17,'I2',9),(18,'I3',9),(19,'J1',10),(20,'K1',11),(21,'K2',11),(22,'L1',12),(23,'M1',13),(24,'M2',13),(25,'M3',13),(26,'N1',14),(27,'N2',14),(28,'O1',15),(29,'P1',16),(30,'P2',16),(31,'Q1',17),(32,'Q2',17),(33,'Q3',17),(34,'R1',18),(35,'S1',19),(36,'S2',19),(37,'T1',20),(38,'U1',21),(39,'U2',21),(40,'V1',22),(41,'W1',23),(42,'W2',24),(43,'X1',25),(44,'X2',25),(45,'X3',26),(46,'Y1',27),(47,'Y2',27),(48,'Z1',28),(49,'AA1',29),(50,'AA2',29),(51,'AB1',30),(52,'AC1',31),(53,'AD1',32),(54,'AE1',33),(55,'AE2',33),(56,'AE3',33),(57,'AF1',34),(58,'AG1',35),(59,'AG2',35),(60,'AH1',36),(61,'AI1',37),(62,'AI2',37),(63,'AJ1',38),(64,'AK1',39),(65,'AK2',39),(66,'AL1',40),(67,'AM1',41),(68,'AM2',41),(69,'AN1',42),(70,'AO1',43),(71,'AP1',44),(72,'AP2',45),(73,'AQ1',46),(74,'AQ2',46),(75,'AR1',47),(76,'AR2',47),(77,'AR3',48),(78,'AS1',49),(79,'AS2',49),(80,'AT1',50),(81,'Seat-1',51),(82,'Seat-2',51),(83,'Seat-3',51),(84,'Seat-1',52),(85,'Seat-2',52),(86,'Seat-3',52),(87,'Seat-1',53),(88,'Seat-2',53),(89,'Seat-3',53),(90,'Seat-1',54),(91,'Seat-2',54),(92,'Seat-3',54),(93,'Seat-1',55),(94,'Seat-2',55),(95,'Seat-3',55),(96,'Seat-1',56),(97,'Seat-1',57),(98,'Seat-1',58),(99,'Seat-1',59),(100,'Seat-1',60),(101,'Seat-1',61),(102,'Seat-1',62),(103,'Seat-2',62),(104,'Seat-1',63),(105,'Seat-1',64),(106,'Seat-2',64),(107,'Seat-1',65),(108,'Seat-2',65),(109,'Seat-1',66),(110,'Seat-2',66),(111,'Seat-3',66);
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
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
