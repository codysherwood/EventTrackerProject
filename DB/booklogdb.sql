-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema booklogdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `booklogdb` ;

-- -----------------------------------------------------
-- Schema booklogdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `booklogdb` DEFAULT CHARACTER SET utf8 ;
USE `booklogdb` ;

-- -----------------------------------------------------
-- Table `book`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `book` ;

CREATE TABLE IF NOT EXISTS `book` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `number_of_words` VARCHAR(45) NULL,
  `image_url` VARCHAR(2000) NULL DEFAULT 'https://c8.alamy.com/comp/BBYJDM/open-book-cut-out-BBYJDM.jpg',
  `date_finished` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS reader@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'reader'@'localhost' IDENTIFIED BY 'reader';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'reader'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `book`
-- -----------------------------------------------------
START TRANSACTION;
USE `booklogdb`;
INSERT INTO `book` (`id`, `title`, `number_of_words`, `image_url`, `date_finished`) VALUES (1, 'The Way of Kings', '383389', 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/TheWayOfKings.png/220px-TheWayOfKings.png', '2021-05-22');
INSERT INTO `book` (`id`, `title`, `number_of_words`, `image_url`, `date_finished`) VALUES (2, 'The Final Empire', '210203', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Mistborn-cover.jpg/220px-Mistborn-cover.jpg', '2021-11-10');
INSERT INTO `book` (`id`, `title`, `number_of_words`, `image_url`, `date_finished`) VALUES (3, 'The Well of Ascension', '244371', 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Mistborn-_The_Well_of_Ascension_by_Brandon_Sanderson.jpg/220px-Mistborn-_The_Well_of_Ascension_by_Brandon_Sanderson.jpg', '2022-03-03');
INSERT INTO `book` (`id`, `title`, `number_of_words`, `image_url`, `date_finished`) VALUES (4, 'The Shining', '197041', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/The_Shining_%281977%29_front_cover%2C_first_edition.jpg/220px-The_Shining_%281977%29_front_cover%2C_first_edition.jpg', '2018-07-16');

COMMIT;

