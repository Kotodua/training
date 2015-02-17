/**
 * Created by k.allakhvierdov on 2/15/2015.
 */

var WebSocketServer = require('ws').Server;
var fs = require('fs');

var fileName = "QA-process-overview.mov";

var wss = new WebSocketServer({port: 3000,host:"127.0.0.1"});
wss.on('connection', function(ws) {
    var readStream =
        fs.createReadStream(fileName,
            {'flags': 'r',
                'mode': 0666});

    readStream.on('data', function(data) {
        ws.send(data, {binary: true, mask: false});
    });

    readStream.on('close', function(){
        ws.close();
    })
});