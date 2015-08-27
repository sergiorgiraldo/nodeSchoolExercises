var http = require("q-io/http");

var promise = new Promise(function(resolve,reject){
    resolve(http.read("http://localhost:1337"));
});

promise
    .then(function (content) {
        console.log(JSON.parse(content.toString()));
    })
    .then(null, console.error);