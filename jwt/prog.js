const jwt = require('jsonwebtoken');


const credentials = { username: 'harp', password: 'harp123' };
const secret = 'qwerty123456';
const token = jwt.sign(credentials, secret);


const unlocked = jwt.verify(token, secret, (err, values) => {
	if(err) return console.log('error occurred');
	console.log('unlocked values: ', values);
});

//console.log(token);
