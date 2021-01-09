create database Groupomania;

use Groupomania;

DROP TABLE IF EXISTS utilisateur CREATE TABLE utilisateurs (
    id INT PRIMARY KEY NOT NULL,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    email VARCHAR(255) UNIQUE,
    motDePasse VARCHAR(100) not null,
    Pseudo VARCHAR(200) UNIQUE,
    administrateur tinyint NOT NULL DEFAULT '0',
    departement VARCHAR(100)
);

DROP TABLE IF EXISTS message;

CREATE TABLE message (
    id MEDIUMINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    thread SMALLINT UNSIGNED NOT NULL,
    sujet VARCHAR(60) NOT NULL,
    date DATETIME NOT NULL,
    autheur VARCHAR(60) NOT NULL DEFAULT,
    FOREIGN KEY (autheur) REFERENCES utilisateur(PersonID) text TEXT NOT NULL
);