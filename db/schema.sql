DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER(255) NOT NULL auto_increment,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
)