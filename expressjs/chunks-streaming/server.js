const express = require('express');
const app = express();
const fs = require('fs');
const constants = require('./public/rules');

const EXPRESS_PORT = 3000;
let count = 0;

app.use(express.raw());

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/video', function(request, response){
    // console.log(request.body);
    if(Buffer.isBuffer(request.body)){
        let buff = request.body;
        if(buff.length !== 0){
            console.log('---x---Headers---x---');
            console.log(request.headers);
        
            fs.writeFileSync(String('out' + count + '.webm'), buff);
            count += 1;
        }
    }
    response.sendStatus(200);
    // res.write('ok');
});

app.listen(EXPRESS_PORT, function(){
    console.log('server started, listening on port: ' + EXPRESS_PORT);
});