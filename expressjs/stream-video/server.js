const express = require('express');
const app = express();
const fs = require('fs');
const videos = require('./modules/videos')

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});


app.get("/text:id", function (req, res) {
    res.send('Hello ' + req.params.id);
});

app.get("/video/:id", function (req, res) {
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Requires Range header");
    }
    const videoPath = "video/" + req.params.id;
    // const [headers, videoStream] = videos.getVideoHeaders(videoPath, range);
    // res.writeHead(206, headers);
    // videoStream.pipe(res);
    res.type('video/mp4');
    fs.createReadStream(videoPath).pipe(res);
    
});

app.listen(3000, function () {
    console.log("Listening on port 3000!");
});