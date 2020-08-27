CREATE DATABASE IF NOT EXISTS `drink-me-DB`;

USE `drink-me-DB`;

DROP TABLE IF EXISTS `Tables_Order_Drinks`; -- เอา FK ออกก่อน
DROP TABLE IF EXISTS `Payment`;
DROP TABLE IF EXISTS `Bar`; -- เอา FK ออกก่อน
DROP TABLE IF EXISTS `Tables`;
DROP TABLE IF EXISTS `Drinks`; -- เอา FK ออกก่อน
DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users`(
    `user_id` INT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(120) NOT NULL,
    `last_name` VARCHAR(120) NOT NULL,
    `gender` VARCHAR(120) NOT NULL,
    `birth of date` VARCHAR(120) NOT NULL,
    `ID_card` VARCHAR(120) NOT NULL,
    `phone_number` VARCHAR(120) NOT NULL UNIQUE,
    `Account_number` VARCHAR(120) NOT NULL,
    `mail` VARCHAR(120) NOT NULL UNIQUE,
    `password` VARCHAR(120) NOT NULL,

    PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Drinks`(
    `drink_id` INT NOT NULL AUTO_INCREMENT,
    `price` VARCHAR(120) NOT NULL,
    `brand` VARCHAR(120) NOT NULL,
    `amount` VARCHAR(120) NOT NULL,

    PRIMARY KEY(`drink_id`)
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Tables_Order_Drinks`(
    `order_id` INT NOT NULL AUTO_INCREMENT,
    `table_id` INT,
    `drink_id` INT, 

    PRIMARY KEY(`order_id`)
    CONSTRAINT `table_id_ibfk_1` FOREIGN KEY (`table_id`) REFERENCES `Tables`(`table_id`)
    CONSTRAINT `drink_id_ibfk_2` FOREIGN KEY (`drink_id`) REFERENCES `Drinks`(`drink_id`)
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Tables`(
    `table_id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT,
    `price` INT,
    `seat` INT,
    `status` INT,
    `user` INT,

    PRIMARY KEY(`table_id`)
    CONSTRAINT `user_id_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES (`Users`)(`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Payment`(
    `payment_id` INT NOT NULL AUTO_INCREMENT,
    `drink_id` INT,
    `first_name` INT,
    `last_name` INT,
    `total` INT,
    `Account_number` INT,
    `ID_card` INT,
    `phone_number` INT,

    PRIMARY KEY(`payment_id`)
    CONSTRAINT `drink_id_ibfk_1` FOREIGN KEY (`drink_id`) REFERENCES (`Drinks`)(`drink_id`)
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;

CREATE TABLE `Bar`(
    `bar_id` INT NOT NULL AUTO_INCREMENT,
    `payment_id` INT,
    `brand` INT,
    `Account_number` INT,
    `phone_number` INT,

    PRIMARY KEY(`bar_id`)
    CONSTRAINT `payment_id_ibfk_1` FOREIGN KEY (`payment_id`) REFERENCES (`Payment`)(`payment_id`)
) ENGINE=InnoDB DEFAULT CHARSET utf8mb4;