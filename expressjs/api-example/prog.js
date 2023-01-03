const express = require('express');

const app = express();
const HTTP_PORT = 3000;

app.get('/', homeCallBack);

app.get('/hello', helloCallBack);

app.get('*', notFoundCallBack);


function homeCallBack(req, res){
	return res.send('This is a home page');
}

function helloCallBack(req, res){
	return res.send('This is a Hello page');
}

function notFoundCallBack(req, res){
	return res.send('The link you have entered, is not correct');
}

app.listen(HTTP_PORT, () => {
	console.log('App running on port: ', HTTP_PORT);
});
