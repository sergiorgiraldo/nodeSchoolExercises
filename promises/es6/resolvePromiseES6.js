var p1 = new Promise(function(resolve, reject){
    setTimeout(resolve("RESOLVED!"), 300);
}); 

p1.then(console.log);
