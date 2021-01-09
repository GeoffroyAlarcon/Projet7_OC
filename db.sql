create database Groupomania CHARACTER SET 'utf8'; ;

use Groupomania 

DROP TABLE IF EXISTS utilisateur
 CREATE TABLE utilisateur (
    id INT PRIMARY KEY NOT NULL,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    email VARCHAR(255) UNIQUE,
    motDePasse VARCHAR(100) not null,
    Pseudo VARCHAR(200) UNIQUE,
    administrateur tinyint NOT NULL DEFAULT '0',
    departement VARCHAR(100)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
DROP TABLE IF EXISTS message;

CREATE TABLE messages (
    id INT PRIMARY KEY NOT NULL,
  idUtilisateur int NOT NULL,
  titre varchar(50) NOT NULL,
  contenu text NOT NULL,
  postee datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  messageParent int DEFAULT NULL,
  pseudo varchar(50) NOT NULL,
FOREIGN KEY(idUtilisateur) REFERENCES utilisateur(id),
FOREIGN KEY(messageParent) REFERENCES messages(id)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

