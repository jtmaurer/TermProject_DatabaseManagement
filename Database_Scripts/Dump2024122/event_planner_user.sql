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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `hashed_password` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `username` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UK_sb8bbouer5wak8vyiiy4pf2bx` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'2024-11-24 21:18:21.543579','jtm87502@uga.edu','4tVXJwcMbolm7rMOVNvORYmgiDkFLrv/dhGBOtwGo1A=','user','jtmaurer'),(2,'2024-11-24 21:18:59.756951','kim@uga.edu','krM0szFd7icrLiLThEVXJZ6xrpAj4cT4NJlULpIc+dA=','user','kimmy'),(3,'2024-11-24 21:19:29.886334','astro@gmail.com','W+NtJFG8yxyYXHWvZXSMZAM++fzrLMEUcPAXJAfMLws=','user','astro'),(4,'2024-11-24 21:20:38.967191','jman@gmail.com','Bx89BC2OK6AgVDECXAnkN/qUzcpql0aDhd8afrdvjPs=','user','jman'),(5,'2024-11-24 21:21:00.206102','pdog@outlook.com','e7vRUDfLqNaOF88QcBvpjMErHBZ0QRZSoKgYnrTuAH4=','user','pdog'),(6,'2024-11-24 21:21:37.289810','nipsey@outlook.com','vgVczkdkUFAyZ3olzVdUdJIuiNDEQrWP3z80sUtjmpQ=','user','nipsey'),(7,'2024-11-24 21:22:07.625546','turtle@outlook.com','C6Msv+AymoRG61cZOFcHo1YbLjgjLYEyfjEJFEqvRy8=','user','smallturtle'),(8,'2024-11-26 13:44:40.721156','jtmaurer2@gmail.com','GkCd1u90tUn45UEc4CcGB4Du+i7qfna4FUnqDNg87CY=','user','jason_maurer'),(9,'2024-11-26 14:10:38.569223','matthewjones@yahoo.com','RDwc6cVBfAPzAmVBSUz/X32upDiQv99lUjAOhzIEzx8=','user','matty'),(10,'2024-11-26 14:34:55.756940','jdog@gmail.com','ySU9sJU3A16Vcx0xpu/br0Xo9co6BhqFk/mDQHyrL+w=','user','jdog'),(11,'2024-11-26 14:39:02.473108','jdubg@gmail.com','H3hlZ11zO/TndA7WhW2gBehToE2MfAiT7hQ9U4URS6E=','user','jdubg'),(12,'2024-11-26 14:41:02.345076','b','GzrSl1y6643Dt9ZQKyTpXrfnKuLY7ZqPBkANgbb77P0=','user','a'),(13,'2024-11-26 14:42:24.713585','basdasd','L7eUqlh/cvqZ7bOV+Ova3WSL5YUZP0OmS1r+wf4gJcc=','user','asdasd'),(14,'2024-11-26 14:52:11.233569','asdasssdsd','b0beFy1KYwSXzCHgqG/HEw1qG1LhFDwY++4ApBFa3lo=','user','asdasddsd'),(15,'2024-11-26 14:53:35.908043','jakemaul@gmail.com','06QwQa09sVJpuxpn+lRM28WYQemPYapYYNZPgsXtTQI=','user','jakemaul'),(16,'2024-11-26 15:00:41.003051','jmax@gmail.com','TUJ3cCC6Yurrz2eSn0EmSq1NRAlOt1Vj1JxCduKj19A=','user','jmax'),(17,'2024-11-26 15:07:06.552163','jdog98777@gmail.com','9CgqzKiPANy5VA+56tlubi7HOLLr10DWAOcg77OWz+A=','user','jdog9876'),(18,'2024-11-26 15:11:46.418760','jjman233@gmail.com','0O7QNfJdQeQOhllTorEns0Gk3iclIdYbIc9fg7kxYIE=','user','jjman233'),(19,'2024-11-26 15:14:15.232704','jjman1233@gmail.com','KPT51wPLxJ98P5C2Cind98BURW+C5wPFxtijUm4VGJY=','user','jjman1233'),(20,'2024-11-26 15:17:30.215460','asdasdasd@gmail.com','V9gl/yH34XU4xLFAgPrb/5fjuaQ3Q8VThYshtYJ3OBg=','user','asdasdasd'),(21,'2024-11-26 15:22:43.425135','jasonmaurer@outlook.com','ocaalBxHoaxxEA3spPT5v8kKvCHJ62nnOmbuhtQfbK8=','user','Jason Maurer'),(22,'2024-11-26 16:35:47.711199','jtmaurer333','ndidHi+pTDfjy7auQjhPuELIlaE2rzomjWlaQEvA1vk=','user','jtmaurer333'),(23,'2024-11-27 08:06:30.317241','jtmaurer2@gmail.com','mMUQy2IHr5eQj4PrYHh33WcTUfAjg49k7MN2TS149jU=','user','jtmaurer2'),(24,'2024-11-27 09:22:10.136085','annmaurer2@gmail.com','NrBrwSwSG4dbqOB1yVn9HFrdLxpzOaSHHEVeaCgf/iQ=','user','annmaurer2'),(25,'2024-11-30 20:45:35.327795','jbro2@gmail.com','$2a$10$qla.BcMK1lWYkQWXV1XLDOmfE5B7lxO5v7TJ3XNDOmGVoKNmXntvG','user','jbro23'),(26,'2024-11-30 21:04:29.295825','jdog987@gmail.com','$2a$10$tBuv1lOwshYeIPu9GWX7U.JEaQCvHlta1df0PHPdROtwcvoGd4Py.','user','jdog987'),(27,'2024-11-30 22:01:17.480180','jtmaurer@gmail.com','$2a$10$GVxuauXfBL6AH/1SdMOH1u/i5aKggAolSSKi7reZIqMNFSG5x7qCq','user','jtmaurer5'),(28,'2024-11-30 22:29:51.655113','jtmaurer10@gmail.com','$2a$10$r07QDHGxLwAHBbYVBiG8H.oDATrucJ.GNC94rLXxI840DHSWUrdTy','user','jtmaurer10'),(29,'2024-12-01 10:14:34.796694','jtmaurer8@gmail.com','UFH2f8MC9QNWdo1Oufp4qbHx+c5xYos1VjpGnkNaxk0=','user','jtmaurer8'),(30,'2024-12-01 17:28:25.712531','poiuyu@yahoo.com','$2a$10$2HqaDIJAMXNb8icT4gz7DeNOcpylBpe/uFN4HjLbDM1kswdwXr4Ny','user','poiuyu'),(31,'2024-12-01 17:30:36.450610','jtmaurer987@gmail.com','$2a$10$cFJQWa5NKC96tNlzYHKeKezY/hmOa7XH6O3jqOKMrhkDM6/8Zbl4G','user','jtmaurer987'),(32,'2024-12-02 11:13:48.288820','jtmaurer67@gmail.com','$2a$10$PqVfZzsQuHarT.Z1twr.huqjm7r6JJXqea4n6R7a6fcE6T.TLtGkm','user','Jason Maurer 2'),(33,'2024-12-02 17:03:05.644296','jtmaurer1010@gmail.com','$2a$10$J22Zj/AamjNjqUVYNB57p.KtXkUmNaBKlbaxFZ.m.D2TVCeVxG4D6','user','jtmaurer101'),(34,'2024-12-02 17:03:42.842106','poiuytr123@gmail.com','$2a$10$p9mJ1hgsOf01z6R83iY32.YL7V.l1NMX5apDOesbTmmjATfUNHxbC','user','poiuytr123');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
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
