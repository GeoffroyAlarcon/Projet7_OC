require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require("helmet");
const path = require ('path') // Pour le middleware express static pour acceder au chemin du système de fichier
const userRoutes = require('./routes/user');
const app = express()


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
app.use('/api/auth', userRoutes)
module.exports = app;