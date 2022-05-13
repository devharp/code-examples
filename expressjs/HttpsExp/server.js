require('dotenv').config()
const https = require('https');
const app = require('express')()
const path = require('path');
const fs = require('fs');

const keys = {
	key: fs.readFileSync(path.join(__dirname, 'keys', 'key.pem')),
	cert: fs.readFileSync(path.join(__dirname, 'keys', 'key.cert'))
};

const https_server = https.createServer(keys, app);

app.get('/', (req, res) => {
	res.send('Welcome');
});

https_server.listen(process.env.HTTP_PORT, () =>{
	console.log('Server running on port: ', process.env.HTTP_PORT);
});
