-- MySQL dump 10.13  Distrib 8.1.0, for macos13 (arm64)
--
-- Host: localhost    Database: coffee
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,19),(2,20),(12,22),(13,23),(14,24),(18,29);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_product`
--

DROP TABLE IF EXISTS `cart_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cart_id` int NOT NULL,
  `product_id` int NOT NULL,
  `product_price` varchar(100) NOT NULL,
  `product_weight` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_id` (`cart_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `cart_product_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`),
  CONSTRAINT `cart_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=653 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_product`
--

LOCK TABLES `cart_product` WRITE;
/*!40000 ALTER TABLE `cart_product` DISABLE KEYS */;
INSERT INTO `cart_product` VALUES (163,2,1,'',''),(164,2,1,'',''),(165,2,1,'',''),(166,2,1,'',''),(169,2,2,'',''),(173,2,3,'',''),(174,2,3,'',''),(175,2,2,'',''),(176,2,2,'',''),(177,2,3,'',''),(178,2,3,'',''),(179,2,3,'',''),(180,2,3,'',''),(181,2,3,'',''),(182,2,3,'',''),(183,2,3,'',''),(184,2,3,'',''),(185,2,3,'',''),(186,2,3,'',''),(187,2,2,'',''),(188,2,2,'',''),(189,2,2,'',''),(190,2,2,'',''),(191,2,2,'',''),(192,2,3,'',''),(193,2,3,'',''),(194,2,3,'',''),(195,2,3,'',''),(196,2,3,'',''),(491,1,3,'3231','400 гр '),(492,1,3,'3231','400 гр '),(493,1,3,'3231','400 гр '),(494,1,1,'6000','660 гр'),(495,1,1,'6000','660 гр'),(496,1,2,'8890','900 гр'),(497,1,2,'8890','900 гр'),(498,1,2,'8890','900 гр'),(499,1,4,'5300','500 гр'),(500,1,4,'5300','500 гр'),(501,1,4,'5300','500 гр'),(502,1,4,'5300','500 гр'),(503,1,1,'6000','660 гр'),(504,1,1,'6000','660 гр'),(505,1,1,'6000','660 гр'),(506,1,1,'6000','660 гр'),(507,12,2,'8890','900 гр'),(508,12,2,'8890','900 гр'),(509,12,2,'400','250 гр'),(510,12,2,'400','250 гр'),(511,13,2,'8890','900 гр'),(512,13,2,'8890','900 гр'),(513,13,2,'8890','900 гр'),(514,13,2,'8890','900 гр'),(515,13,2,'8890','900 гр'),(633,14,1,'6000','660 гр'),(634,14,1,'1000','250 гр'),(635,14,1,'6000','660 гр'),(636,14,1,'1000','250 гр'),(637,14,1,'1000','250 гр'),(645,14,2,'400','250 гр'),(647,18,2,'8890','900 гр'),(648,18,2,'8890','900 гр'),(649,18,2,'8890','900 гр'),(651,18,2,'400','250 гр'),(652,18,2,'400','250 гр');
/*!40000 ALTER TABLE `cart_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `phone` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` varchar(250) NOT NULL,
  `city` varchar(150) NOT NULL,
  `sum` int NOT NULL,
  `product_quantity` int NOT NULL,
  `products_info` varchar(5000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,24,'qqq','qqq@gmail.com','qqqqq','asdЧелныasd',97333,20,'2 + Голландский + 900 гр, 2 + Голландский + 900 гр, 2 + Голландский + 900 гр, 2 + Голландский + 900 гр, 2 + Голландский + 900 гр, 1 + Эфиопский + 660 гр, 1 + Эфиопский + 660 гр, 1 + Эфиопский + 660 гр, 4 + Бразильский + 500 гр, 4 + Бразильский + 500 гр, 4 + Бразильский + 250 гр, 4 + Бразильский + 250 гр, 4 + Бразильский + 250 гр, 3 + Голландский + 250 гр, 3 + Голландский + 250 гр, 3 + Голландский + 250 гр, 3 + Голландский + 400 гр , 3 + Голландский + 400 гр , 3 + Голландский + 400 гр , 2 + Голландский + 900 гр'),(2,24,'qqq','qqq@gmail.com','qqqqq','asdЧелныasd',97333,20,'2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 1 Эфиопский 660 гр, 1 Эфиопский 660 гр, 1 Эфиопский 660 гр, 4 Бразильский 500 гр, 4 Бразильский 500 гр, 4 Бразильский 250 гр, 4 Бразильский 250 гр, 4 Бразильский 250 гр, 3 Голландский 250 гр, 3 Голландский 250 гр, 3 Голландский 250 гр, 3 Голландский 400 гр , 3 Голландский 400 гр , 3 Голландский 400 гр , 2 Голландский 900 гр'),(3,24,'qqq','qqq@gmail.com','qqqqq','asdЧелныasd',97333,20,'2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 1 Эфиопский 660 гр, 1 Эфиопский 660 гр, 1 Эфиопский 660 гр, 4 Бразильский 500 гр, 4 Бразильский 500 гр, 4 Бразильский 250 гр, 4 Бразильский 250 гр, 4 Бразильский 250 гр, 3 Голландский 250 гр, 3 Голландский 250 гр, 3 Голландский 250 гр, 3 Голландский 400 гр , 3 Голландский 400 гр , 3 Голландский 400 гр , 2 Голландский 900 гр'),(4,24,'qqq','qqq@gmail.com','qqqqq','asdЧелныasd',97333,20,'2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 1 Эфиопский 660 гр, 1 Эфиопский 660 гр, 1 Эфиопский 660 гр, 4 Бразильский 500 гр, 4 Бразильский 500 гр, 4 Бразильский 250 гр, 4 Бразильский 250 гр, 4 Бразильский 250 гр, 3 Голландский 250 гр, 3 Голландский 250 гр, 3 Голландский 250 гр, 3 Голландский 400 гр , 3 Голландский 400 гр , 3 Голландский 400 гр , 2 Голландский 900 гр'),(5,24,'qqq','qqq@gmail.com','qqqqq','asdЧелныasd',97333,20,'2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 1 Эфиопский 660 гр, 1 Эфиопский 660 гр, 1 Эфиопский 660 гр, 4 Бразильский 500 гр, 4 Бразильский 500 гр, 4 Бразильский 250 гр, 4 Бразильский 250 гр, 4 Бразильский 250 гр, 3 Голландский 250 гр, 3 Голландский 250 гр, 3 Голландский 250 гр, 3 Голландский 400 гр , 3 Голландский 400 гр , 3 Голландский 400 гр , 2 Голландский 900 гр'),(6,24,'qqq','qqq@gmail.com','qqqqq','asdЧелныasd',97333,20,'2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 1 Эфиопский 660 гр, 1 Эфиопский 660 гр, 1 Эфиопский 660 гр, 4 Бразильский 500 гр, 4 Бразильский 500 гр, 4 Бразильский 250 гр, 4 Бразильский 250 гр, 4 Бразильский 250 гр, 3 Голландский 250 гр, 3 Голландский 250 гр, 3 Голландский 250 гр, 3 Голландский 400 гр , 3 Голландский 400 гр , 3 Голландский 400 гр , 2 Голландский 900 гр'),(7,24,'qqq','qqq@gmail.com','qqqqq','asdЧелныasd',97333,20,'2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 1 Эфиопский 660 гр, 1 Эфиопский 660 гр, 1 Эфиопский 660 гр, 4 Бразильский 500 гр, 4 Бразильский 500 гр, 4 Бразильский 250 гр, 4 Бразильский 250 гр, 4 Бразильский 250 гр, 3 Голландский 250 гр, 3 Голландский 250 гр, 3 Голландский 250 гр, 3 Голландский 400 гр , 3 Голландский 400 гр , 3 Голландский 400 гр , 2 Голландский 900 гр'),(8,24,'qqq','qqq@gmail.com','qqqqq','asdЧелныasd',97333,20,'2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 1 Эфиопский 660 гр, 1 Эфиопский 660 гр, 1 Эфиопский 660 гр, 4 Бразильский 500 гр, 4 Бразильский 500 гр, 4 Бразильский 250 гр, 4 Бразильский 250 гр, 4 Бразильский 250 гр, 3 Голландский 250 гр, 3 Голландский 250 гр, 3 Голландский 250 гр, 3 Голландский 400 гр , 3 Голландский 400 гр , 3 Голландский 400 гр , 2 Голландский 900 гр'),(9,24,'qqq','qqq@gmail.com','qqqqq','asdЧелныasd',97333,20,'2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 1 Эфиопский 660 гр, 1 Эфиопский 660 гр, 1 Эфиопский 660 гр, 4 Бразильский 500 гр, 4 Бразильский 500 гр, 4 Бразильский 250 гр, 4 Бразильский 250 гр, 4 Бразильский 250 гр, 3 Голландский 250 гр, 3 Голландский 250 гр, 3 Голландский 250 гр, 3 Голландский 400 гр , 3 Голландский 400 гр , 3 Голландский 400 гр , 2 Голландский 900 гр'),(10,24,'qqq','qqq@gmail.com','qqqqq','asdЧелныasd',97333,20,'2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 1 Эфиопский 660 гр, 1 Эфиопский 660 гр, 1 Эфиопский 660 гр, 4 Бразильский 500 гр, 4 Бразильский 500 гр, 4 Бразильский 250 гр, 4 Бразильский 250 гр, 4 Бразильский 250 гр, 3 Голландский 250 гр, 3 Голландский 250 гр, 3 Голландский 250 гр, 3 Голландский 400 гр , 3 Голландский 400 гр , 3 Голландский 400 гр , 2 Голландский 900 гр'),(11,24,'qqq','qqq@gmail.com','qqqqq','asdЧелныasd',97333,20,'2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 2 Голландский 900 гр, 1 Эфиопский 660 гр, 1 Эфиопский 660 гр, 1 Эфиопский 660 гр, 4 Бразильский 500 гр, 4 Бразильский 500 гр, 4 Бразильский 250 гр, 4 Бразильский 250 гр, 4 Бразильский 250 гр, 3 Голландский 250 гр, 3 Голландский 250 гр, 3 Голландский 250 гр, 3 Голландский 400 гр , 3 Голландский 400 гр , 3 Голландский 400 гр , 2 Голландский 900 гр'),(12,24,'qqq','qqq@gmail.com','qqqqq','asdЧелныasd',30704,6,'2 Голландский 900 гр, 2 Голландский 900 гр, 3 Голландский 400 гр , 3 Голландский 400 гр , 3 Голландский 400 гр , 3 Голландский 400 гр ');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` varchar(100) NOT NULL,
  `weight` varchar(100) NOT NULL,
  `h_picture` varchar(255) NOT NULL,
  `v_picture` varchar(255) NOT NULL,
  `acidity` float NOT NULL DEFAULT '0',
  `density` float NOT NULL DEFAULT '0',
  `big_description` varchar(255) NOT NULL,
  `low_price` varchar(100) NOT NULL,
  `low_weight` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Эфиопский','С нотами аромата','6000','660 гр','Test H_Picture 1','Test V_Picture 1',2,3,'Ароматный кофе из Эфиопии, обжарен в Татарстане','1000','250 гр'),(2,'Голландский','С нотами вкуса','8890','900 гр','Test H_Picture 2','Test V_Picture 2',4,2,'Ароматный кофе из Голландии, обжарен в Татарстане','400','250 гр'),(3,'Голландский','С нотами дымки','3231','400 гр ','Test H_Picture 3','Test V_Picture 3',3,4,'Ароматный кофе из Голландии, обжарен в Татарстане','800','250 гр'),(4,'Бразильский','С нотами нуги','5300','500 гр','Test H_Picture 4','Test V_Picture 4',5,3,'Ароматный кофе из Бразилии, обжарен в Татарстане','1100','250 гр');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_picture`
--

DROP TABLE IF EXISTS `product_picture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_picture` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `picture` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `product_picture_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_picture`
--

LOCK TABLES `product_picture` WRITE;
/*!40000 ALTER TABLE `product_picture` DISABLE KEYS */;
INSERT INTO `product_picture` VALUES (1,1,'Test Picture 1'),(2,2,'Test Picture 2');
/*!40000 ALTER TABLE `product_picture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscription`
--

DROP TABLE IF EXISTS `subscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscription` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscription`
--

LOCK TABLES `subscription` WRITE;
/*!40000 ALTER TABLE `subscription` DISABLE KEYS */;
INSERT INTO `subscription` VALUES (1,'{\"email\":\"qqq@gmail.com\"}'),(2,'{\"email\":\"qqq@gmail.com\"}'),(3,'qqq@gmail.com'),(4,'qqq@gmail.com'),(5,'qqq@gmail.coma');
/*!40000 ALTER TABLE `subscription` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `area` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Petya','Petrov','+777-222-111','petya@com','Pushin st.','1122','',''),(2,'John','Doe','123213212','john@example.com','123 Main St, City','securepassword','',''),(3,'John','Doe','123213212','john@example.com','123 Main St, City','securepassword','',''),(4,'Paul','Doe','123213212','john@example.com','123 Main St, City','$2a$10$luWt0ecLWj1F0TvF8oo/BuDRnUY2aQYisQ2qJHvE/bE2OeuD2.RC.','',''),(5,'Tom','Doe','123213212','john@example.com','123 Main St, City','securepassword','',''),(6,'Tom','Doe','123213212','john@example.com','123 Main St, City','$2a$10$UKl/f5FXTmM0nBqNG5SQD.7qtk1weHwnsnSXl0X6bR1WogOib3BqG','',''),(7,'Tom','Doe','123213212','tom@example.com','123 Main St, City','$2a$10$urje42Y0NZ6ib9Fc5Xdj/efylaInjXrSDba3iHbbxJI6ud5WI2Rgq','',''),(8,'Anton','Sdasd','tevirp','tim@example.com','123 Main St, City','$2a$10$ZjEwkG.gs2HNK0zoVtPDq.c4kBcSFkrkj0MMy3Z3QfgxkeDzF2qii','',''),(9,'Tima','Sdasd','123213212','tim@example.com','123 Main St, City','$2a$10$ZK.62rnfvp6IrjEhAZoJC.zKYhj1VbUgrQTQFNtjclQ3r33VxTTv2','',''),(10,'Anton','Sdasd','tevirp','bog@example.com','123 Main St, City','$2a$10$2N1UofCXJKxZjWv4ZZUO2OZ.OinpgtmieNPvU2e5GNpkJyN322dKa','',''),(11,'1213','23123','123123','timur.salakhutdinov@gmail.com','13123','$2a$10$CoKDx6aqh2/Iq1xAMQZmnu2m/8BxqAg02gnfrEhzlHd11MrgiYzH6','',''),(12,'test','test','test','timur.salakhutdinov@gmail.com','test','$2a$10$LHEFqeulnA9GOwDNMXmFsu8.xb4SToJIlRv.KM5MBpnIYFG0Kk69i','',''),(13,'asdasd','asdasd','asdads','tim@gma.com','sdasd','$2a$10$AENk7hGQ29RqhP3FcECtaepk4TJI2cD/SeWbNYM3PTDIGLmhhlRq.','',''),(14,'asda','asdsad','asdasd','bog@gma.com','123','$2a$10$f84Bqb0eCh18O0KEFPtjQuUyJRHEQ2J2mQtuGXts5TECub2vpTcjm','',''),(15,'asdasd','asdasd','asdasd','timur.salakhutdinov@gmail.com','asdasd','$2a$10$emfJCY.O9ksBhsg0NjdqYe8tA2FyhUQBer8LUHGVmSulp1y/vuQz2','',''),(16,'prb','asd','123123','timur.salakhutdinov@gmail.com','123','$2a$10$9zR8M6FzPfmN6YJfDj.X2u4Jgpgjr38/VU1mnkuEkyN9pI.1vtFne','',''),(17,'фыв','фыв','фыв','timur.salakhutdinov@gmail.com','asd','$2a$10$n.OFD.JN35AgoCVKCiDoFu/vNGx9jfSCOd0bz8RXT1pfT6bKGftQi','',''),(18,'asd','asd','asd','qwe@gmail.com','asd','$2a$10$/Em17c.3EDegmTCKzYPmQOSoF/g5Sfxh4x8BL8r.bGURQIFq9RGVe','',''),(19,'sushjsa asdывфыв','sushhhasdфыв','foxussdsd','www@gmail.com','privet sushhss foxy 112233','$2a$10$buM91oseg4wBxEVfuXEOSOmEg089Vcv29sDM44ouzo5lS3gqVBG9.','',''),(20,'aaa','aaa','123123','aaa@gmail.com','asdq3123','$2a$10$LvdF2LA4YnBViRt/EGUcHOw5NAl71wey34wg8o9aqgdozQQu8p4V.','Foxu4е4ее',''),(21,'fox','fox','fox','fox@gmail.com','fox','$2a$10$uC9Mj3JcQmjd05M73nKsEelNTrgd9/f3juwrNU7MGlHoFJNt4B82C','fox',''),(22,'req','req','req','req@gmail.com','req','$2a$10$9qKlaElge/c8cNnF4mJa0uyjQWJtBEGZ3.bBmUyG3EdSuzn9mRLnq','Челны','reqasd'),(23,'ree','ree','ree','ree@gmail.com','ree','$2a$10$EkhIkHcYOUOafn2dytphkOoQEx9YsOO4sNvEJ.8Rl1Drfk/4TeJaG','ree',''),(24,'qqqqwe','qqq','qqqц','qqq@gmail.com','qqqqq','$2a$10$jyAsVSbbVUwKe3iXEsQUbuJ7DvEkb1bx4CrubG6sXUVoYAgv5d0i2','asdЧелныasd',''),(25,'asdas','asd','123123','wwq@gma.com','asd','$2a$10$xy4mxHD6b2.Kcaj6JzLImurmV2kzz25u.ltdTYlVNxlcF4YPjnF3q','asd','asd'),(26,'asdas','asdads','123123','red@gma.com','123123','$2a$10$/NAoexDMi.ds5i61lx2AQ.fAnd.ePZcM4RQDEQkE7MShq2b9mzK6S','asdas','asdasd'),(27,'sadasd','asdasd','123123','rte@gma.com','123123','$2a$10$0INgQQ8nVkNE3X2QnbXmnunNfRWejlY6dodn3zpXIzZ62w60pYlua','asdasd','asdasd'),(28,'asdasdasd','jhajsdhj','2312313','hja@gma.com','12312','$2a$10$bXq235Vd1er9pppSOMGO4.6grB7HSJDJd1hXXAD0jLaV7wF2VV/be','asdasd','hjahsjd'),(29,'gad','asasdad','12312','foxi@gma.com','1323','$2a$10$2JNR37fMgKx3NTFRu7HmluL1YRgAbGd7HD5vTcO3CzO8Hg4F.SAU2','adsads','');
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

-- Dump completed on 2024-02-06 16:00:12
