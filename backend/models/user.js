class User {
  constructor(
    id,
    prenom,
    nom, email, motDePasse, pseudo, departement, admin) {
    this.id = id;
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;
    this.motDePasse = motDePasse;
    this.pseudo = pseudo;
    this.departement = departement;
    this.admin = admin;
  }
  saveUser() {
    return "INSERT INTO utilisateur (nom, prenom,email,departement,motDePasse,pseudo) VALUES (?,?,?,?,?,?)"
  }
  findUser() {
    return "SELECT * FROM utilisateur where email = ?";
  }
  deleteUser() {
    return "DELETE utilisateur FROM utilisateur WHERE email = ? and motDePasse = ?"
  }
  loginForAdmin() {
    return "SELECT * FROM utilisateur where email = ? and motDePasse =  SHA1(?)";
  }
  updateUser() {
    return "UPDATE user SET  nom = ? , prenom = ? , email = ? ,departement = ?, motDePasse = ? , pseudo = ? where email = ? and motDePasse = ? "
  }
};
module.exports = User;
