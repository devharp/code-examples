const express = require('express');
const app = express();
const sessionHandler = require('./modules/harp/sessionHandler').sessionHandler;
const expressSessions = require('express-session');
const { JSONCookie } = require('cookie-parser');

// app.use(cookieParser());

app.use(function(req, res, next){
    let cookie = req.headers.cookie;
    sessionHandler(req, res, next)
    /*if(cookie){
        console.log(JSON.parse(cookie));

    }
    else{
        console.log('No Cookie found hence creating one');
        console.log(Math.floor(Math.random()*255).toString(16));
    }*/
    // console.log('Here');
    next();
});

// app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);