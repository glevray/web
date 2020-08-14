use users;
drop table users;
CREATE TABLE users (idutilisateurs INT PRIMARY KEY NOT NULL AUTO_INCREMENT,firstname VARCHAR(30) NULL,lastname VARCHAR(30) NULL,birthdate DATETIME NULL);
drop table ident;
CREATE TABLE ident (idident INT PRIMARY KEY NOT NULL AUTO_INCREMENT,email VARCHAR(150) NULL,identifiant VARCHAR(20) NULL,motdepasse VARCHAR(256));