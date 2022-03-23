const express = require('express'), app = express(), session = require('express-session');

const sessionprops = { secret: '211231231dsfsdf', resave: true, saveUninitialized: true }
app.use(session(sessionprops));

const auth = (req, res, next) => {
    if (req.session && req.session.user === 'harp' && req.session.admin) {
        return next();
    }
    else {
        return res.sendStatus(401);
    }
}

app.get('/login', (req, res) => {
    if (req.query.username === 'harp' && req.query.password === 'harp123') {
        req.session.user = 'harp';
        req.session.password = 'harp123';
        req.session.admin = true;
        res.send('Login successful');
    }
    else {
        res.send('login failed!');
    }
});

// Logout endpoint
app.get('/logout', function (req, res) {
    req.session.destroy();
    res.send("logout success!");
});

// Get content endpoint
app.get('/content', auth, function (req, res) {
    res.send("You can only see this after you've logged in." + req.session.user);
});

app.listen(3000);
console.log("app running at http://localhost:3000");