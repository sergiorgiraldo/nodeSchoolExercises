var http = require("http");
var url = require("url");

function getParseTime (timestamp) {
  return {
    hour: timestamp.getHours(),
    minute: timestamp.getMinutes(),
    second: timestamp.getSeconds()
  };
}

function getUnixTime (timestamp) {
  return { unixtime : timestamp.getTime() };
}

var server = http.createServer(function (request, response) {
    if (request.method != "GET")
        return response.end("send me a GET");
        
    var parsedUrl = url.parse(request.url, true);
    var isoDate = new Date(parsedUrl.query.iso);        
    
    response.writeHead(200, { "Content-Type": "application/json" });
    
    if (parsedUrl.pathname.indexOf("api/parsetime") > -1){
        response.end(JSON.stringify(getParseTime(isoDate)));
    }
    else if (parsedUrl.pathname.indexOf("api/unixtime") > -1){
        response.end(JSON.stringify(getUnixTime(isoDate)));
    }
    else{
        response.writeHead(404);
        response.end();
    }
});

server.listen(process.argv[2]);