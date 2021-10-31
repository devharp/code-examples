let button = {
    start: document.getElementById('start'),
    stop: document.getElementById('stop'),
};
let video = document.querySelector('#video');
let mediaRecorder;
let chunks = [];

function reload() {
    window.location.reload();
}

navigator.mediaDevices.getUserMedia({
    audio: true,
    video: {
        facingMode: "environment",
        width: { min: 1280 },
        height: { min: 720 }
    }
}).then(performOperations).catch(recordingError);

function performOperations(stream) {
    mediaRecorder = new MediaRecorder(stream);
    video.srcObject = stream;

    mediaRecorder.ondataavailable = function(e) {
        chunks.push(e.data);
        let blob = new Blob(chunks, { 'type': 'video/webm; codecs=vp9' });
        console.log(blob);

        sendChunks(blob);
    }
    button.start.onclick = function() {
        console.log('start pressed');
        mediaRecorder.start();
    }

    button.stop.onclick = function() {
        console.log('stop pressed');
        mediaRecorder.stop();
        let blob = new Blob(chunks, { 'type': 'video/webm; codecs=vp9' });
        // let blob = new Blob(chunks, { 'type': 'video/mp4; codecs=H264' });
        // sendChunks(blob);
        chunks = [];
    }
}

function sendChunks(blob) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/video');
    xhr.send(blob);
    console.log('data sent');
}

function recordingError(err) {
    console.log(err);
}