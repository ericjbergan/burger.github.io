DROP DATABASE IF EXISTS `burgerdb`;
CREATE DATABASE `burgerdb`;

use burgerdb;

CREATE TABLE burgers (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);
