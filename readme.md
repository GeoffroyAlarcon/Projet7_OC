            // Créer la base de donnée MYSQL //

    lancez le script SQL dans la console MYSQL Server qui se trouve dans le fichier db.sql

            // A la racine du projet //
        Installer la dépendance Bootstrap avec la commande "npm install bootstrap "

            // Dans le dossier Backend //

    Faire npm install pour installer toutes les dépendances nécessaires puis lancer la commande "nodemon server" pour lancer le serveur.

            // Dans le dossier Frontend //

    Faites la commande "npm install" pour installer angular et ainsi que les autres dépendances puis lancer la commande "ng serve --open" pour lancer le front


             //  Profil admininstrateur //

    Conectez vous à la base de donnée MYSQL et lancer la commande suivante pour ajouter un profil Administrateur :
    " insert INTO utilisateur (email,motDePasse, administrateur) VALUES('foo@bar.example',SHA1('foo_bar_MotDePasse'),1);".

    Pour se connecter en tant qu'administrateur, saississez  l'URL dans la barre de navigation "http://localhost:4200/admin". F
