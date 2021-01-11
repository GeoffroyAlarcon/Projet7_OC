
const conn = require('../mysqlConfig')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require("../models/user")

exports.signup = (req, res, next) => {

  const user = new User() 

  bcrypt.hash(user.password, 10).then((hash) => {
    user.password = hash
    const user = new User(
      "Castex",   "Jean","jean.castex@gmail.com", "test",'JeanJean', "commercial" );
    console.log(user.nom)
    if (err) throw err;
  
    console.log("Connected!");
    var sql = "INSERT INTO utilisateur (nom, prenom,email,departement,motDePasse,pseudo) VALUES (?,?,?,?,?,?)";
    conn.query(sql, [user.nom, user.prenom, user.email, user.departement, user.motDePasse, user.pseudo], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
    }
  

exports.login = (req, res, next) => {
 
}

exports.deleteUser = (req, res, next) => {
  conn.query(
    `DELETE FROM users WHERE id=${req.params.id}`,
    req.params.id,
    function (error, results, fields) {
      if (error) {
        return res.status(400).json(error)
      }
      return res
        .status(200)
        .json({ message: 'Votre compte a bien été supprimé !' })
    }
  )
}