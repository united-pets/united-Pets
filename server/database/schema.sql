

-- " to run this file type this command  "mysql -u root -p  < server/database/schema.sql"
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `iduser` INT NOT NULL,
  `firstName` VARCHAR(30) NULL,
  `lastName` VARCHAR(20) NULL,
  `email` VARCHAR(30) NULL,
  `phoneNumber` VARCHAR(8) NULL,
  `password` VARCHAR(45) NULL,
  `adress` VARCHAR(255) NULL,
  `imageUrl` VARCHAR(255) NULL,
  `typeofservice` VARCHAR(45) NULL,
  PRIMARY KEY (`iduser`)
  )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Stores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Stores` (
  `idStore` INT NOT NULL,
  `StoreName` VARCHAR(20) NULL,
  `StoreLogo` VARCHAR(255) NULL,
  `taxRegistrationNumber` VARCHAR(20) NULL,
  `user_iduser` INT NOT NULL,
  `taxRegistrationNumbzerImage` VARCHAR(255) NULL,
  PRIMARY KEY (`idStore`, `user_iduser`),
  INDEX `fk_Store_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_Store_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `mydb`.`users` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`sales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`sales` (
  `idsales` INT NOT NULL,
  `user_iduser` INT NOT NULL,
  `salescol` VARCHAR(45) NULL,
  PRIMARY KEY (`idsales`, `user_iduser`),
  INDEX `fk_sales_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_sales_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `mydb`.`users` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Items` (
  `idItems` INT NOT NULL,
  `ItemName` VARCHAR(20) NULL,
  `ItemImage` VARCHAR(255) NULL,
  `ItemPrice` VARCHAR(5) NULL,
  `ItemDescription` VARCHAR(255) NULL,
  `ItemCategory` VARCHAR(20) NULL,
  `quantity` INT NULL,
  `Store_idStore` INT NOT NULL,
  `sales_idsales` INT NOT NULL,
  PRIMARY KEY (`idItems`, `Store_idStore`, `sales_idsales`),
  INDEX `fk_Items_Store1_idx` (`Store_idStore` ASC) VISIBLE,
  INDEX `fk_Items_sales1_idx` (`sales_idsales` ASC) VISIBLE,
  CONSTRAINT `fk_Items_Store1`
    FOREIGN KEY (`Store_idStore`)
    REFERENCES `mydb`.`Stores` (`idStore`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Items_sales1`
    FOREIGN KEY (`sales_idsales`)
    REFERENCES `mydb`.`sales` (`idsales`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Posts` (
  `idPosts` INT NOT NULL,
  `AnimalImage` VARCHAR(255) NULL,
  `AnimalName` VARCHAR(20) NULL,
  `AnimalDescription` VARCHAR(255) NULL,
  `AnimalLocalisation` VARCHAR(20) NULL,
  `user_iduser` INT NOT NULL,
  PRIMARY KEY (`idPosts`, `user_iduser`),
  INDEX `fk_Posts_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_Posts_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `mydb`.`users` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`comments` (
  `idcomments` INT NOT NULL,
  `animalName` VARCHAR(15) NULL,
  `race` VARCHAR(10) NULL,
  `color` VARCHAR(10) NULL,
  `localisation` VARCHAR(30) NULL,
  `Posts_idPosts` INT NOT NULL,
  `user_iduser` INT NOT NULL,
  `comments_idcomments` INT NOT NULL,
  `comments_Posts_idPosts` INT NOT NULL,
  `comments_user_iduser` INT NOT NULL,
  PRIMARY KEY (`idcomments`, `Posts_idPosts`, `user_iduser`, `comments_idcomments`, `comments_Posts_idPosts`, `comments_user_iduser`),
  INDEX `fk_comments_Posts1_idx` (`Posts_idPosts` ASC) VISIBLE,
  INDEX `fk_comments_user1_idx` (`user_iduser` ASC) VISIBLE,
  INDEX `fk_comments_comments1_idx` (`comments_idcomments` ASC, `comments_Posts_idPosts` ASC, `comments_user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_comments_Posts1`
    FOREIGN KEY (`Posts_idPosts`)
    REFERENCES `mydb`.`Posts` (`idPosts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `mydb`.`users` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_comments1`
    FOREIGN KEY (`comments_idcomments` , `comments_Posts_idPosts` , `comments_user_iduser`)
    REFERENCES `mydb`.`comments` (`idcomments` , `Posts_idPosts` , `user_iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`admin` (
  `idtable1` INT NOT NULL,
  `username` VARCHAR(20) NULL,
  `password` VARCHAR(20) NULL,
  PRIMARY KEY (`idtable1`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pets` (
  `idpet` INT NOT NULL,
  `petsName` VARCHAR(10) NULL,
  `age` VARCHAR(2) NULL,
  `color` VARCHAR(10) NULL,
  `race` VARCHAR(15) NULL,
  `petImgUrl` VARCHAR(255) NULL,
  `user_iduser` INT NOT NULL,
  `Posts_idPosts` INT NOT NULL,
  `Posts_user_iduser` INT NOT NULL,
  PRIMARY KEY (`idpet`, `user_iduser`, `Posts_idPosts`, `Posts_user_iduser`),
  INDEX `fk_pet_user1_idx` (`user_iduser` ASC) VISIBLE,
  INDEX `fk_pets_Posts1_idx` (`Posts_idPosts` ASC, `Posts_user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_pet_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `mydb`.`users` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pets_Posts1`
    FOREIGN KEY (`Posts_idPosts` , `Posts_user_iduser`)
    REFERENCES `mydb`.`Posts` (`idPosts` , `user_iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`veteranary`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`veteranary` (
  `idveteranary` INT NOT NULL,
  PRIMARY KEY (`idveteranary`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
