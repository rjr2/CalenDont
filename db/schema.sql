DROP DATABASE IF EXISTS calendont_db;

CREATE DATABASE calendont_db;

USE calendont_db;

CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  enrolled BOOLEAN NOT NULL
);

CREATE TABLE events (
  event_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  schedule DATE NOT NULL, 
  details VARCHAR(30) NOT NULL,
  cancelled BOOLEAN NOT NULL
  user_id INT NOT NULL 
);



