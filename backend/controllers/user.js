const jwt = require("jsonwebtoken");

const conn = require('../mysqlConfig')
const bcrypt = require('bcrypt')

const User = require("../models/user")

exports.signup = (req, res, next) => {
  const user = req.body;
  console.log(user)
  console.log("nom : " + user.email);
  bcrypt.hash(req.body.motDePasse, 10)
    .then(hash => {

    user.motDePasse = hash

      console.log("Connected!");
      var sql = "INSERT INTO utilisateur (nom, prenom,email,departement,motDePasse,pseudo) VALUES (?,?,?,?,?,?)";
      conn.query(sql, [user.nom, user.prenom, user.email, user.departement, user.motDePasse, user.pseudo], function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    });
}

exports.login = (req, res, next) => {
  const user = req.body;

  conn.query("SELECT * FROM utilisateur where email = ?", user.email, (err, rows, result) => {
    if(err) throw err;
    
    else {
      if (rows.length == 0) {
        return res.status(400).json({ error: 'utilisateur non trouvé' });
      }
      rows.forEach((row) => {

        bcrypt.compare(req.body.motDePasse, `${row.motDePasse}`)
          .then(valid => {
            if (!valid) 
            
            {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            else {
              const authUser = new User(`${row.prenom}`, `${row.nom}`, `${row.email}`, `${row.motDePasse}`, `${row.pseudo}`, `${row.departement}`);
              return res.status(200).json({authUser,
                token: jwt.sign(
                  { authUser},
                  'RANDOM_TOKEN_SECRET',
                  { expiresIn: '24h' }
                ) // ajout d'un token pour sécuriser la session
              
              
              });
            }
          })
      })
  };



});

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
}