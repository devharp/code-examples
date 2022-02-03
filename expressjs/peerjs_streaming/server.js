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
let peersockets = [];
const HTTPS_PORT = 3000;

app.use(express.static(__dirname + '/public'));
app.use('/peerjs', peerServer);

io.on('connection', function(socket){
    // console.log('fghfghfghfghf');
    sockets.push(socket);
    socket.on('disconnect', function(){
        const i = sockets.indexOf(socket);
        sockets.splice(i, 1);
    });
    socket.on('send-vid', function(data){
        console.log(data);
        for(const e of sockets){
            e.emit('recvr-id', data);
        }
    });
});

peerServer.on('connection', function(peersocket){
    console.log('peer joined socket id: ', peersocket.id);
    peersockets.push(peersocket);

    for(const e of sockets){
        for(const f of peersockets){
            // e.emit('joined-peer', f.id);
        }        
    }
        
});
peerServer.on('disconnect',function(peersocket){
    console.log('peer left : ' + peersocket.id);
    peersockets.splice(peersockets.indexOf(peersocket), 1);
});

peerServer.on('data', data =>{
    console.log('received a data req from ' + data);
})


httpsServer.listen(HTTPS_PORT);
console.log('Listening on port: ', HTTPS_PORT);