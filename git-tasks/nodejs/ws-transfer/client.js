var WebSocket = require('ws');
var ws = new WebSocket("ws://localhost:3000");

ws.binaryType = 'arraybuffer';

var bytes = 0;

setInterval(function () {
    ws.onmessage = function (evt) {
        bytes += evt.data.toString().length;
    };
    console.log(bytes/1024/1024+' Mb/s');
    bytes = 0;
}, 1000)



