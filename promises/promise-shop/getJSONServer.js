var http = require("http");

var app = http.createServer(function(request, response){
    response.end("{\"foo\":42}");
});

app.listen("1337");