let cookie;
async function init(){
    const socket = await io();
    
    socket.on('message', function(data){
        console.log('dfdfgfdg');
        console.log(data);
    });
    

    socket.on('create-cookie', function(data){
        console.log('cookie generated: ' + data);
        document.cookie = data;
        
    });

}

init();