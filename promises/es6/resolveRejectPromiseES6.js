var p1 = new Promise(function(resolve, reject){
    
    var rnd = Math.floor(Math.random() * 101);
    
    //console.log(">>>>" + rnd);
       
    try {
        if (rnd % 2 == 0)
            throw "REJECTED!";
        else
            resolve("GOT IT!")
    } 
    catch (e) {
        reject(e);
    }
}); 

p1
    .then(
        function(data){console.log("SUCCESS!!!! " + data);}, 
        function(data){console.log("ERR!!!! " + data);})
    .then(console.log("CHAINED!!!!!!"))
    ;
