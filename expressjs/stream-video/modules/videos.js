const fs = require('fs');

const LIST = ['video/out00.mp4', 'video/out01.mp4'];

function getVideoHeaders(videoPath, range){
    const videoSize = fs.statSync(videoPath).size;
    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };
    const videoStream = fs.createReadStream(videoPath, { start, end });

    return [headers, videoStream];
    // return headers;

}
module.exports = {LIST, getVideoHeaders}