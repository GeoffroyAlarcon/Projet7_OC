

 class Message {
    constructor(id, user, titre, contenu, messageDate) {
        this.id = id;
        this.user = user;
        this.titre = titre;
        this.contenu = contenu;
        this.messageDate = messageDate;
    }

saveMessage(){
    return  "INSERT INTO messages (titre, contenu,idUtilisateur) VALUES (?,?,?)"
}

getAll(){
    return "select * from messages"
}

}
module.exports = Message