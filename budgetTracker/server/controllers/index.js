let express = require('express');
let router = express.Router();
module.exports.displayHomePage = (req,res,next) =>{
  res.render('index', { title: 'Home' });
}

module.exports.displayContactPage = (req,res,next) =>{
  res.render('index', { title: 'contact' });
}

module.exports.displayPrivacyPage = (req,res,next) =>{
  res.render('index', { title: 'contact' });
}
