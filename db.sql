create database Groupomania CHARACTER SET 'utf8';

use Groupomania;

DROP TABLE IF EXISTS utilisateur;

CREATE TABLE utilisateur (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nom VARCHAR(100),
  prenom VARCHAR(100),
  email VARCHAR(255) UNIQUE,
  motDePasse VARCHAR(250) not null,
  pseudo VARCHAR(200) UNIQUE,
  administrateur tinyint NOT NULL DEFAULT '0',
  departement VARCHAR(100)
);

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  titre varchar(50) NOT NULL,
  contenu text NOT NULL,
  postDate datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  messageParent int NULL,
  idUtilisateur int null,
  FOREIGN KEY(idUtilisateur) REFERENCES utilisateur(id) ON DELETE CASCADE,
  FOREIGN KEY(messageParent) REFERENCES messages(id) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8;