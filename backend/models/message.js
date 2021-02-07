class Message {
    constructor(id, user, titre, contenu, messageDate, messageParent, admin) {
        this.id = id;
        this.user = user;
        this.titre = titre;
        this.contenu = contenu;
        this.messageDate = messageDate;
        this.messageParent = messageParent
        this.admin = admin;
    }
    saveMessage() {
        return "INSERT INTO messages (titre, contenu,idUtilisateur) VALUES (?,?,?)"
    }
    answerMessage() {
        return "INSERT INTO messages (titre, messageParent, contenu,idUtilisateur) VALUES (?,?,?,?)"
    }


    getAll() {
        return " select *, messages.id as messageId, utilisateur.id as utilisateurId from messages inner join utilisateur ON messages.idUtilisateur = utilisateur.id ORDER by postDate DESC;" // ajout d'alias pour récupérer les différnets ID
    }
    getallChildMessage() {
        return "select * , messages.id as messageId, utilisateur.id as utilisateurId from messages inner join utilisateur ON messages.idUtilisateur = utilisateur.id where messages.messageParent = ? ORDER by postDate DESC;"
    }
    getOneMessageById() {
        return " select *, messages.id as messageId, utilisateur.id as utilisateurId from messages inner join utilisateur on messages.idUtilisateur = utilisateur.id  where messages.id = ?; " // ajout d'alias pour récupérer le message par son ID
    }
    deleteMessage() {
        return "delete messages from messages inner join utilisateur ON  messages.idUtilisateur = utilisateur.id  where messages.id = ? and utilisateur.motDePasse = ? and utilisateur.email = ?;"
    }

    deleteMessageForAdmin() {
        return "delete messages from messages  where messages.id = ?;"
    }

}

module.exports = Message