const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http)
const sessionHandler = require('./modules/harp/sessionHandler').sessionHandler;
const utils = require('./modules/harp/utils');
// const expressSessions = require('express-session');
// const { JSONCookie } = require('cookie-parser');

// app.use(cookieParser());
let cookie_status;
app.use(function(req, res, next){
    let cookie = req.headers.cookie;
    cookie_status = sessionHandler(req, res, next);
    console.log('cookie status: ', cookie_status);
    
    next();
});

app.use('/', express.static('public'));
/*app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});*/

io.on('connection', function(socket){
    if (!cookie_status){
        console.log('cookie not found, hence creating one');
        socket.emit('create-cookie', JSON.stringify({session: utils.genHexString(60), node: utils.genHexString(60)}));
    }
});

http.listen(3000);