var http = require("http")
var bl = require("bl")

var urls = [];
var done = 0;

for (var i = 2; i < process.argv.length; i++) {
    urls.push({href:process.argv[i], content:""});
    get(urls.length -1);
}

function get(index){
    http.get(urls[index].href, function(res) {
        res.pipe(bl(function (err, data) {
            if (err)
                return console.error(err)
        
            urls[index].content = data.toString();
            done += 1;
            
            if (done == urls.length) finish();
        })); 
    });
}

function finish(){
    for (var i = 0; i < urls.length; i++) {
        console.log(urls[i].content);
    }
}
