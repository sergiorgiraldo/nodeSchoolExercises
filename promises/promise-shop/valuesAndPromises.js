var q = require("q");

var defer = q.defer(); 

function attachTitle(data){
    return "DR. " + data;
}

defer.promise
    .then(attachTitle)
    .then(console.log);

defer.resolve("MANHATTAN");