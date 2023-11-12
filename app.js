const express = require('express');

const app = express();

//////////////////////////////////
// permettre l'accès à l'API (CORS)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token,Origin, X-Requested-With, Content, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  const utilisateur =[{
    nom:"maroudou maroudou boulingui ",
    prenom:"bouka djeni",
    quatier:"bikele"
  },{
    nom:"mounguengui ",
    prenom:"nboue",
    quatier:"sibang"
  },
  {
    nom:"mudu ",
    prenom:"ngoutou",
    quatier:"sablier"
  },{
    nom:"maroudou ",
    prenom:"bouka",
    quatier:"montalier"
  }]
  app.use((req, res) => {
    res.json({ message: "UPDATE !" ,utilisateur}); 
 });

module.exports = app;