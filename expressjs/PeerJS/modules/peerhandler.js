let conns = [];

function init() {
    return "program started";
}

function add(socket) {
    conns.push({ socket });

    // show('Added');
}

function remove(socket) {
    for (let i = 0; i < conns.length; i++) {
        if (conns[i].socket === socket) {
            conns.splice(i, 1);
            break;
        }
    }
    // show('Removed');
}

function addPeerToSocket(socketid, peer) {
    // console.log('req to add socket: ', socketid, ',\t', 'peer: ', peer);
    return new Promise((resolve, reject) => {

        for (let i = 0; i < conns.length; i++) {
            const e = conns[i];
            if (e.socket.id === socketid) {
                conns[i].peer = peer;
                // console.log('added peer and socket: { socket: ', conns[i].socket.id, ', peer: ', conns[i].peer, ' }');
            }
        }
        console.log('\n---x---x---');
        console.log('Connections List');
        let temp_peers = [];
        conns.map(e => {
            console.log('{ socket: ', e.socket.id, ', peer: ', e.peer, ' }');
            temp_peers.push(e.peer);
        });
        console.log('---x---x---\n');
        resolve(temp_peers);
    });
}

function getAllSockets() {
    let temp_socks = [];
    conns.map(e => {
        temp_socks.push(e.socket);

    });

    return temp_socks;
}

function getAllPeers() {
    let temp_peers = [];
    conns.map(e => {
        if (e.peer !== null && e.peer !== undefined) {
            temp_peers.push(e.peer);
        }
    });
    return temp_peers;
}

function show(msg) {
    if (msg !== null) {
        console.log(msg);
    }
    conns.map(e => { console.log(e.socket.id) });
    console.log('\n')
}

module.exports = { init, add, addPeerToSocket, remove, getAllSockets, getAllPeers }