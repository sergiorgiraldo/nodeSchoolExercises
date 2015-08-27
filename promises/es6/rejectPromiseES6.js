var p1 = new Promise(function(resolve, reject){
      
    try {
        throw "REJECTED!";
    } 
    catch (e) {
        reject(e);
    }
}); 

p1.then(null, console.log);
