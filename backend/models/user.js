 class User {
  constructor(
    id,
    prenom,
    nom, email, motDePasse, pseudo, departement) {
      this.id = id;
      this.prenom = prenom;
    this.nom = nom;
    this.email = email;
    this.motDePasse = motDePasse;
    this.pseudo = pseudo;
    this.departement = departement;
  }
    saveUser(){
   return  "INSERT INTO utilisateur (nom, prenom,email,departement,motDePasse,pseudo) VALUES (?,?,?,?,?,?)"
  }
findUser(){
return "SELECT * FROM utilisateur where email = ?"; 
}
deleteUser(){
 return "DELETE FROM utilisateur WHERE id = ?"
}
};
module.exports = User;
