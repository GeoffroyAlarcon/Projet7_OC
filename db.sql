create database Groupomania;
use Groupomania;
CREATE TABLE utilisateur
(
    id INT PRIMARY KEY NOT NULL,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    email VARCHAR(255) UNIQUE,
Pseudo VARCHAR(200) UNIQUE, 
 departement VARCHAR(100)
);
CREATE TABLE message (
    id MEDIUMINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    thread SMALLINT UNSIGNED NOT NULL,
    sujet VARCHAR(60) NOT NULL,
    date DATETIME NOT NULL,
    autheur VARCHAR(60) NOT NULL DEFAULT,
FOREIGN KEY (autheur) REFERENCES utilisateur(PersonID)
    text TEXT NOT NULL
);
