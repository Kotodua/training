var WebSocket = require('ws');
var ws = new WebSocket("ws://localhost:3000");

ws.binaryType = 'arraybuffer';

var bytes = 0;
var getData = function() {
    ws.onmessage = function (evt) {
        bytes += evt.data.length;
    }
};

getData();

var interval = setInterval(function () {
    getData();
    console.log(bytes/1024/1024+' Mb/s');
    bytes = 0;
}, 1000)

ws.on('close', function(){
    console.log(bytes/1024/1024+' Mb/s');
    console.log('Connection closed on server');
    clearInterval(interval);
    ws.close()
})



