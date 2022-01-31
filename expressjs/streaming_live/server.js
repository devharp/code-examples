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
let count = 0;
let sockets = [];

app.use(express.raw());
// https.use(express.raw());

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
})

app.get('/video', function(req, res){
    res.sendFile(__dirname + '/public/video.html');
});

// app.get('/:file_name', function(req, res){
//     console.log('video sent');
//     res.sendFile(__dirname + '/received/' + file_name);
// });
app.use(express.static(__dirname + '/public'))

app.get('/socket.io.min.js', function(req, res){
    res.setHeader('Content-Type', 'text/javascript');
    res.sendFile(__dirname + '/public/socket.io.min.js');
});
app.get('/socket.io.min.js.map', function(req, res){
    res.setHeader('Content-Type', 'text/javascript');
    res.sendFile(__dirname + '/public/socket.io.js.map');
});

app.post('/video', function(request, response){
    // console.log(request.body);
    if(Buffer.isBuffer(request.body)){
        let buff = request.body;
        if(buff.length !== 0){
            // console.log('---x---Headers---x---');
            // console.log(request.headers);
        
            fs.writeFileSync(String(recv_folder + '/out' + count + '.webm'), buff);
            if(count % 5 === 0){
                if(count > 5){
                    for(let i = 0; i < 5; i++){
                        fs.unlinkSync(String(recv_folder + '/out' + String(count - 10 + i) + '.webm'))
                    }
                }
            }
            count += 1;
            for(let i = 0; i < sockets.length; i++){
                sockets[i].emit('vid-recv', 'received/out' + String(count - 1) + '.webm');
            }
        }
    }
    response.sendStatus(200);
    // res.write('ok');
});

/*app.listen(EXPRESS_PORT, function(){
    console.log('server started, listening on port: ' + EXPRESS_PORT);
});*/

const io = new Server(httpServer, { /* options */ });
io.on('connection', function(socket){
    sockets.push(socket);
    socket.on('disconnect', function(){
        let i = sockets.indexOf(socket);
        sockets.splice(i, 1);
    });
});

httpServer.listen(EXPRESS_PORT);

console.log('Listen on port: ', EXPRESS_PORT);