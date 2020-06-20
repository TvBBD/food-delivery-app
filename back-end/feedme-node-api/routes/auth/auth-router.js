
var express = require('express');
var bodyParser = require('body-parser');

var authRouter = express.Router();
authRouter.use(bodyParser.json());

var Auth = require('./Auth');

authRouter.post('/login', (req, res) => {
    Matiere.getmatieres(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

authRouter.post('/signup', (req, res) => {
    Matiere.getmatieres(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

authRouter.post('/registerHomeChef', (req, res) => {
    Matiere.getmatieres(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports.authRouter = authRouter;