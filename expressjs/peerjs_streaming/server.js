const express = require('express');
const app = express();
const { createServer } = require('https');
const { Server } = require('socket.io');
const peer = require('peer');
const fs = require('fs');

const httpsServer = createServer({
    key: fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem'),
    passphrase: 'harp'
}, app);
const io = new Server(httpsServer);
const peerServer = peer.ExpressPeerServer(httpsServer);
let sockets = [];
const HTTPS_PORT = 3000;

app.use(express.static(__dirname + '/public'));
app.use('/peerjs', peerServer);

io.on('connection', function(socket){
    sockets.push(socket);
    socket.on('disconnect', function(){
        const i = sockets.indexOf(socket);
        sockets.splice(i, 1);
    });
    socket.on('test', function(data){
        // socket.emit('test', data);
        console.log('socket io id: ' + data);
    });
});

peerServer.on('connection', function(peersocket){
    console.log('peer socket id: ', peersocket.id);
});

httpsServer.listen(HTTPS_PORT);
console.log('Listening on port: ', HTTPS_PORT);