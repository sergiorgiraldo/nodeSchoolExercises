var fs = require("fs");
var buff = fs.readFile(process.argv[2], "utf-8", function(err, data){
    console.log(data.toString().split("\n").length - 1);
});
