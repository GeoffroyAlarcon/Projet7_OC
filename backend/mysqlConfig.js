const User = require('./models/user')
const mysql = require('mysql')
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
})
conn.connect(function(err) {

  conn.query("SELECT * FROM utilisateur", (err,rows,result) => {
    if(err) throw err;
    rows.forEach( (row) => {
     const user = new User(`${row.prenom}`,`${row.nom}`,`${row.email}`,`${row.motDePasse}`,`${row.pseudo}`,`${row.departement}`);
     console.log(user)
    });
});
})
module.exports = conn