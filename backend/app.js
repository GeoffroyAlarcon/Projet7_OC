require("dotenv").config()
const express = require('express')
const bodyParser = require('body-parser') // Pour faciliter le traitement des données contenues dans le corp de la reqûete, le transformant en objet JSON
const helmet = require("helmet")
const path = require ('path') // Pour le middleware express static pour acceder au chemin du système de fichier


const app = express()

var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password:process.env.DB_PASS,
});

db.connect(function(err) {

  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");

});



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*') // On donne l'accès à toute origine '*'
  res.setHeader(
    'Access-Control-Allow-Headers', // On donne l'autorisation d'utiliser ces headers sur l'objet réponse
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  )
  res.setHeader(
    'Access-Control-Allow-Methods', // On donne l'autorisation d'utiliser ces actions aux réponse
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  next()
})

app.use(bodyParser.json()) 


// helmet 
app.use(helmet.contentSecurityPolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
// end helmet

module.exports = app;