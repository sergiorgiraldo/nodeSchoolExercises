var q = require("q");

function throwMyGod () {
    throw new Error("OH NOES");
}

function iterate(num){
    console.log(num);
    return ++num;
}

function iterateWithPromise(num){
    var def = q.defer();

    console.log(num);
    setTimeout(def.resolve, 10, ++num);
    //def.resolve(++num);
    
    return def.promise;
}

iterateWithPromise(10)
    .then(iterateWithPromise)
    .then(iterateWithPromise);

q.fcall(iterate, 1)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(throwMyGod)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate) 
    .then(iterate)
    .then(null, console.log);
    
    // another way: the done will throw the exception if the error occurs in the err handler
    //.then(null, throwMyGod)
    //.done();    //if you dont put this, the exception in the err handler is lost
