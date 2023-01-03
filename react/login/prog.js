const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
app.use(cors());
const db = [
    { username: 'harp', password: 'harp' },
    { username: 'shubya', password: 'shubya' },
    { username: 'nikhil', password: 'nikhil' },
]

const secretkey = 'secret';

function auth(req, res, next){
    try {
        const { token } = req.query;
        if (!token) {
            return res.sendStatus(501);
        }
        
        const { username, password } = jwt.verify(token, secretkey);
        for (const e of db) {
            if (e.username === username && e.password === password) {
                return next();
            }
        }

        // console.log({ data });

    } catch (err) {
        console.log('something is wrong');
    }

    return res.sendStatus(501);
}

app.get('/login', (req, res) => {
    try {
        const { username, password } = req.query;
        for (const e of db) {
            if (e.username === username && e.password === password) {
                const token = jwt.sign({ username, password }, secretkey);
                return res.send({ token });
            }
        }
    } catch (err) {
        console.error(err);
    }
    return res.sendStatus(501);
});


app.get('/', auth, (req, res) => {
    return res.sendStatus(200);
});




app.listen(3001, callfunction);

function callfunction() {
    console.log(`App running onn port: 3001`);
}