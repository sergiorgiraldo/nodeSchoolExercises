module.exports = function(n1, n2, callback){
    (function(err,data){
        if (err) return callback(err);
        
        var data = Number(n1) + Number(n2);
        
        callback(null, data)})();
}