var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json({ type: 'application/json' }))

app.get('/login', function (req, res) {
    // ini static datanya
    const users = [
        {
            "username": "test"
            , "password": "uwu"
        }
    ]
    // ini buat validasinya
    users.forEach((x) => {
        if (x.username == username && x.password == password) {
            res.render('sukses login ' + x.username)
            return 
        }
    })
    res.render('gagal');
});

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/playgame', function (req, res) {
    res.render('playgame');
});

module.exports = app