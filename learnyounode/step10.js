var strftime = require("strftime")
var net = require('net')

var server = net.createServer(function (socket) {
    socket.write(strftime("%Y-%m-%d %H:%M", new Date()));
    socket.end();
})
server.listen(process.argv[2]);