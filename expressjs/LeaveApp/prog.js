require('dotenv').config();
const path = require('path');
const fs = require('fs');
const modules = require('./modules');
const express = require('express');
const expresssession = require('express-session');
const cors = require('cors');

const sqlite = require('sqlite3');
let db;
const app = express();
const secretkey = modules.genRanHex(50);

app.use(cors({ origin: '*', credentials: true }));
app.use(expresssession({ secret: secretkey, resave: true, saveUninitialized: true }));
app.use(express.text())
app.use('/', express.static(path.join(__dirname, 'public')));

async function auth(req, res, next) {
    if (req.session.username === null || req.session.username === undefined) {
        res.redirect('/login.html');
        return;
    }
    const username = (await getUsername(req.session.username)).username;
    if (username === req.session.username) {
        next();
        return;
    }
    res.redirect('/login.html');
    return;
}

app.post('/login', async (req, res) => {
    try {
        const payload = JSON.parse(req.body);
        console.log('CLient sent: ', payload);
        const username = (await getUsername(payload.username)).username;
        if (username === payload.username) {
            req.session.username = username;
            res.sendStatus(200);
        }
        else {

            res.sendStatus(500);
        }

    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.post('/signup', async (req, res) => {
    try {
        let payload = JSON.parse(req.body);
        payload.userid = modules.genRanHex(10);
        console.log(payload);
        await addUser(payload);
        res.sendStatus(200);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.get('/logout', (req, res) => {
    req.session.username = null;
    req.session.destroy();
    res.redirect('/');
});

app.get('/', auth, (req, res) => {
    res.sendFile(path.join(__dirname, 'private', 'index.html'));
});

app.get('/data', auth, async (req, res) => {
    try {
        const data = await getAllData(req.session.username);
        res.send(data);
    }
    catch (err) {
        res.sendStatus(500);
    }
});

app.get('/letter', auth, (req, res) => {
    try {
        res.sendFile(path.join(__dirname, 'private', 'letter.html'));
    }
    catch (err) { res.sendStatus(500); }
});

app.post('/letter', auth, async (req, res) => {
    try {
        const payload = JSON.parse(req.body);
        // writeLetter(req.session.username, payload);
        const userid = (await getAllData(req.session.username)).id;
        await writeLetter(userid, payload);
        res.sendStatus(200);
    }
    catch (err) {
        res.sendStatus(500);
    }
});

app.listen(process.env.HTTP_PORT, async function () {
    try {
        db = new sqlite.Database(process.env.DATABASE_LOCATION);
        console.log('listening on port: ', process.env.HTTP_PORT);
        console.log('Express session secret key: ', secretkey);
    } catch (err) {
        console.error(err);
    }

});

function getUsername(username) {
    return new Promise((resolve, reject) => {
        db.all(`select username from users where username='${username}'`, (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows[0]);
        });
    });
}

function addUser(payload) {
    return new Promise((resolve, reject) => {
        db.exec(`INSERT INTO users(id, username, password, name, email) VALUES('${payload.userid}', '${payload.username}', '${payload.password}', '${payload.name}', '${payload.email}')`, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(true);
            }
        });
    });
}

function getAllData(username) {
    return new Promise((resolve, reject) => {
        let data = {};
        db.all(`select * from users where username='${username}'`, (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            data = rows[0];
            db.all(`select id, data from leaveletter where userid='${data.id}'`, (err, rows) => {
                if(err){
                    reject(err);
                    return;
                }
                data.letters = rows;
                resolve(data);
            });
            return;
        });
    });
}

function writeLetter(userid, payload) {
    return new Promise((resolve, reject) => {

        // const clob = (JSON.stringify(payload.letter));
        let letterid = (payload.id === 'new') ? modules.genRanHex(10) : payload.id;

        if(payload.id === 'new'){
            db.exec(`INSERT INTO leaveletter(id, userid, data) \
            VALUES('${letterid}', '${userid}', '${JSON.stringify(payload.letter)}')`,
            (err) => {
                if(err){
                    reject(err);
                    return;
                }
                resolve(true);
                return;
            });
            return;
        }
        else{

            db.exec(`UPDATE leaveletter SET data='${JSON.stringify(payload.letter)}' WHERE id='${payload.id}'`, (err) => {
                if(err){
                    reject(err);
                    return;
                }
                resolve(true);
                return;
            });
        }

    });
}