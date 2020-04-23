DROP DATABASE IF EXISTS movielist;

CREATE DATABASE movielist;

USE movielist;

CREATE TABLE directors (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  director_name varchar(60) NOT NULL
);

CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  movie_name VARCHAR(60) NOT NULL,
  director INT,
  FOREIGN KEY(director) REFERENCES directors(id)
);
