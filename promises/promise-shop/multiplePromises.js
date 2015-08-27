var q = require("q");

var def1 = q.defer();
var def2 = q.defer();


function all(def1, def2){
    var defAll = q.defer();
    var val1, val2;
    var counter = 0;

    def1
        .then(function(data){
            counter++;
            val1 = data;
            if (counter == 2) defAll.resolve([val1, val2]);
        })
        .then(null, defAll.reject)
        .done();

    def2
        .then(function(data){
            counter++;
            val2 = data;
            if (counter == 2) defAll.resolve([val1, val2]);
        })
        .then(null, defAll.reject)
        .done();
    
    return defAll.promise;
}

all(def1.promise, def2.promise).then(console.log);

setTimeout(function () {
        def1.resolve("PROMISES");
        def2.resolve("FTW");
    }, 200);
      
