
 class User {
  constructor(
    id,
     prenom,
    nom, email, motDePasse, pseudo, departement) {
    this.prenom = prenom;
    this.id=id;
    this.nom = nom;
    this.email = email;
    this.motDePasse = motDePasse;
    this.pseudo = pseudo;
    this.departement = departement;
  }

};
module.exports = User;
