const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
const recv_folder = 'received';


const EXPRESS_PORT = 3000;
let count = 0;

app.use(express.raw());
// https.use(express.raw());

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/video', function(request, response){
    // console.log(request.body);
    if(Buffer.isBuffer(request.body)){
        let buff = request.body;
        if(buff.length !== 0){
            // console.log('---x---Headers---x---');
            // console.log(request.headers);
        
            fs.writeFileSync(String(recv_folder + '/out' + count + '.webm'), buff);
            count += 1;
        }
    }
    response.sendStatus(200);
    // res.write('ok');
});

/*app.listen(EXPRESS_PORT, function(){
    console.log('server started, listening on port: ' + EXPRESS_PORT);
});*/

https.createServer({
    key: fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem'),
    passphrase: 'harp'
}, app).listen(EXPRESS_PORT);
console.log('Listen on port: ', EXPRESS_PORT);