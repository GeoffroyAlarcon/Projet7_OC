require("dotenv").config()
const express = require('express')
const bodyParser = require('body-parser') // Pour faciliter le traitement des données contenues dans le corp de la reqûete, le transformant en objet JSON
const helmet = require("helmet")
const path = require ('path') // Pour le middleware express static pour acceder au chemin du système de fichier
const { Sequelize,DataTypes,Model } = require('sequelize')
const app = express()
const User = require('./models/user')

const sequelize = new Sequelize({
  database:'groupomania',
  username: 'root',
  password:'root', 
  host: 'localhost',
  dialect: 'mysql'
});


    async  function sequentialStart() {
           sequelize.authenticate();
          const users = await User.findAll({
           raw:true 
          });
          console.log(users);
    }

    try{
sequentialStart()
    }
catch(e){}
    app.post('/users',(req,res,next) =>{
console.log(req.body);
res.status(201).json({
message: "utilisateur enregistré"
})


}) 
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