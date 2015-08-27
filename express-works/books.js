var express = require("express");
var fs = require("fs");

var app = express();

app.get("/books", function(request, response) {
    fs.readFile(process.argv[3], function(err, data){
        if (err) return response.sendStatus(500)
        
        response.json(JSON.parse(data));
    });
});

app.listen(process.argv[2]);