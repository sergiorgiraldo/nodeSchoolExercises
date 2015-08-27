var http= require("http")

var url = process.argv[2];

http.get(url, function(res) {
    res.setEncoding("utf-8");    
    res.on("error", function(e) {
        console.log("Got error: " + e.message)
    });
    res.on("data", function(chunk) {
        console.log(chunk);
    });
});