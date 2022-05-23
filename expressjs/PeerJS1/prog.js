require('dotenv').config();
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const keys = { key: fs.readFileSync(path.join(__dirname, 'keys', 'key.pem')), cert: fs.readFileSync(path.join(__dirname, 'keys', 'key.cert')) }
const http = require('https').createServer(keys, app);
const io = require('socket.io')(http);

let peerids = [];

app.set('view engine', 'ejs');

app.use((req, res, next) => {
    // console.log('Here');
    next();
});

app.get('/', (req, res) => {
    res.render('pages/index', { text: 'Harpreet Singh' });
});

io.on('connection', (socket) => {
    // console.log('user connected');

    socket.on('peer-id', data => {
        console.log('peer joined: ', data);
        peerids.push({ socket, peerid: data });
        let peeri = [];
        peerids.map((e, i) => {
            peeri.push(e.peerid);
            console.log('peer joined\tTotal Peers: ', peerids.length);

        });

        peerids.map((e, i) => {
            e.socket.emit('joined', peeri);
        });
    });

    socket.on('disconnect', () => {
        console.log('socket left');
        for (let i = 0; i < peerids.length; i++) {
            if (peerids[i].socket.id === socket.id) {
                peerids.splice(i, 1);
                break;
            }
        }
        console.log('peer left\tTotal Peers: ', peerids.length);
        let temppeer = [];
        peerids.map(e => {
            temppeer.push(e.peerid);
            console.log(e.peerid);
        });

        peerids.map((e, i) => {
            e.socket.emit('left', temppeer);
        });

    });
});

http.listen(process.env.HTTP_PORT, () => {
    console.log('App running on port: ', process.env.HTTP_PORT);
});

