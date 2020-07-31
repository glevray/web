use users;
CREATE TABLE users (idutilisateurs INT PRIMARY KEY NOT NULL AUTO_INCREMENT,firstname VARCHAR(30) NULL,lastname VARCHAR(30) NULL,birthdate DATETIME NULL);
insert into users (firstname,lastname,birthdate) values ('gerald','levray','1968/03/06');
insert into users (firstname,lastname,birthdate) values ('jeanne','dupond','1965/08/08');
insert into users (firstname,lastname,birthdate) values ('francoise','durand','1968/08/12');
insert into users (firstname,lastname,birthdate) values ('pierre','lefroy','1988/07/06');
insert into users (firstname,lastname,birthdate) values ('jean','naimarre','2001/05/06');