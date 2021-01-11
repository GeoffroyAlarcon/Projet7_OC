DROP database Groupomania
create database Groupomania CHARACTER SET 'utf8'; ;

use Groupomania 
drop table utilisateur;
 CREATE TABLE utilisateur (
    id INT PRIMARY KEY NOT NULL  AUTO_INCREMENT,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    email VARCHAR(255) UNIQUE,
    motDePasse VARCHAR(100) not null,
    pseudo VARCHAR(200) UNIQUE,
    administrateur tinyint NOT NULL DEFAULT '0',
    departement VARCHAR(100)
); 
DROP TABLE IF EXISTS messages;
CREATE TABLE messages (
    id INT PRIMARY KEY NOT NULL,
  idUtilisateur int not null,
  titre varchar(50) NOT NULL,
  contenu text NOT NULL,
  poste datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  messageParent int DEFAULT NULL,
  pseudo varchar(50) NOT NULL,
FOREIGN KEY(  idUtilisateur) REFERENCES utilisateur(id),
FOREIGN KEY(messageParent) REFERENCES messages(id)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

