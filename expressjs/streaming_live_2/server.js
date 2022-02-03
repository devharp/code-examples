const express = require('express');
const app = express();
const { createServer } = require("https");
const { Server } = require("socket.io");
const fs = require('fs');
const recv_folder = 'public/received';

const httpServer = createServer({
    key: fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem'),
    passphrase: 'harp'
  }, app);


const EXPRESS_PORT = 3000;
let sockets = [];

app.use(express.raw());
app.use(express.static(__dirname + '/public'))

const io = new Server(httpServer, { /* options */ });
io.on('connection', function(socket){
    sockets.push(socket);
    socket.on('disconnect', function(){
        let i = sockets.indexOf(socket);
        sockets.splice(i, 1);
    });

    socket.on('signal', function(data){
        // console.log(data);
        for(const e of sockets){
            if(e !== socket){
                e.emit('signal', data);
            }
        }
    });
});

httpServer.listen(EXPRESS_PORT);
console.log('Listen on port: ', EXPRESS_PORT);