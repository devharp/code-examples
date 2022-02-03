console.log('Client working');

const socket = io();
const video = document.querySelector('.container video');
function init() {

    socket.on('connect', function (data) {

        // socket.emit('signal', 'hello');
        // console.log('data sent');

    });

    setupVideoCamera();
}

function setupVideoCamera() {
    const constraints = {
        audio: false,
        video: {
            width: 100,
            height: 100
        }
    }
    navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream) {

            let peer = new SimplePeer({initiator: true, stream})
            peer.on('signal', data =>{
                // console.log(data.signal);
                socket.emit('signal', data);
            });

            video.srcObject = stream;
            video.onloadedmetadata = function (e) {
                video.play();
            }

        })
        .catch(function (err) {
            console.log('Error aya');
        })
}


init();