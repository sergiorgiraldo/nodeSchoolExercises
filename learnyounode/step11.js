var fs = require("fs");
var http = require("http");

var server = http.createServer(function (request, response) {
    var fileName = process.argv[3];
    var stream = fs.createReadStream(fileName);
    stream.pipe(response);

});

server.listen(process.argv[2]);