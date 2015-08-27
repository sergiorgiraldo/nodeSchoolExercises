var express = require("express");
var crypto = require("crypto");

var app = express();

app.put("/message/:id", function(request, response) {
    response.send(crypto.createHash("sha1")
                .update(new Date().toDateString() + request.params.id)
                .digest('hex'));
});

app.listen(process.argv[2]);