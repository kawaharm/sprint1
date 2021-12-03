const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const layouts = require('express-ejs-layouts');
const { Team } = require('/.models');
const { Op } = require('sequelize');

app.set('view engine', 'ejs'); // for our view (html like pages), we want to use 
app.use(layouts);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.json({ message: 'NCAA FOOTBALL RANKINGS' });
});
