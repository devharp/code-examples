require('dotenv').config();
const path = require('path');
const fs = require('fs');

const http = require('https');
const express = require('express');
const app = express();
const http_server = http.createServer({ key: fs.readFileSync(path.join(__dirname, 'keys', 'key.pem')), cert: fs.readFileSync(path.join(__dirname, 'keys', 'key.cert')) }, app);
const io = require('socket.io')(http_server);


const peerhandler = require('./modules/peerhandler');
const REQUEST_TYPES = require('./modules/constants/requesttypes.json')

app.set('view engine', 'ejs');
app.use(express.text());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/iceservers.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'modules', 'constants', 'iceservers.js'));
});

app.get('/requesttypes.js', (req, res) => {
    fs.writeFileSync(path.join(__dirname, 'modules', 'constants', 'requesttypes.js'), `const REQUEST_TYPES = ${JSON.stringify(REQUEST_TYPES)}`)
    res.sendFile(path.join(__dirname, 'modules', 'constants', 'requesttypes.js'));
});

app.post('/manage', (req, res) => {
    const payload = JSON.parse(req.body);
    switch (payload.type) {
        case REQUEST_TYPES.ADD_PEER_TO_SOCKET:
            peerhandler.addPeerToSocket(payload.socket, payload.peer)
                .then(peers => {
                    // console.log('received a promise:', peers);
                    res.send({ type: 'peers', data: peers });
                    const sockets = peerhandler.getAllSockets();
                    const peers_list = peerhandler.getAllPeers();
                    for (let i = 0; i < sockets.length; i++) {
                        const e = sockets[i];
                        if (e !== null) {
                            e.emit(REQUEST_TYPES.PEERS_LIST_UPDATED, peers_list);
                        }
                    }
                })
                .catch(err => { console.error('got an error: ', err) });
            break;
        default:
            res.sendStatus(501);
    }
});

io.on('connection', socket => {

    // console.log('socket ', socket.id, ' joined');
    peerhandler.add(socket);

    socket.on('disconnect', () => {
        // console.log('socket ', socket.id, ' disconnected');
        peerhandler.remove(socket);
        const sockets = peerhandler.getAllSockets();
        const peers_list = peerhandler.getAllPeers();
        for (let i = 0; i < sockets.length; i++) {
            const e = sockets[i];
            if (e !== null) {
                e.emit(REQUEST_TYPES.PEERS_LIST_UPDATED, peers_list);
            }
        }
    });
});

http_server.listen(process.env.HTTP_PORT, () => {

    console.log('Server running on port:', process.env.HTTP_PORT);
});