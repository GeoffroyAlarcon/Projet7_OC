
const conn = require('../mysqlConfig')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require("../models/user")

exports.signup = (req, res, next) => {
  const user = new User();
  var values = [user.nom, user.prenom,user.email, user.pseudo, user.motDePasse, user.departement];
  bcrypt.hash(user.password, 10).then((hash) => {
    user.password = hash
    conn.query('INSERT INTO utilisateur(nom,prenom,email,pseudo,motDePasse,departement) VALUES ?', values, function (
      error,
      results,
      fields
    ) {
      if (error) {
        // Si erreur de la requête
        console.log(error) // La console du serveur affiche l'erreur
        return res.status(400).json(error.sqlMessage)
      } // Et retourne uniquement le message de l'erreur au front
      return res.status(201).json({
        message:
          'Votre compte a bien été créé ! Vous pouvez maintenant vous connecter.'
      })
    })
  })
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