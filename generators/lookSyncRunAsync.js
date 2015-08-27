var fs = require('fs');

function run (generator) {
  var it = generator(go);

  function go (err, result) {
    if (err) return it.throw(err);
    it.next(result);
  }

  go();
}

run(function* (done) {
    try{
        var dirFiles = yield fs.readdir(process.argv[2] || 'NoNoNoNo', done); 

        for (var file of dirFiles){ 
            console.log(file);
        }
    } 
    catch (err) {
        console.log(null);
    }
});