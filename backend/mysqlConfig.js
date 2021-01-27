const User = require('./models/user')
const mysql = require('mysql')
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "groupomania"
})
conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = conn