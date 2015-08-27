String.prototype.endsWith = function(searchString, position) {
      var subjectString = this.toString();
      if (position === undefined || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
  };
  
//*******************************  
var fs = require("fs");

module.exports = function(dir, ext, callback){
    // (function(err,data){
    //   if (err) return callback(err);
    //   // yada yada
    //   callback(null, data)})();;
    //
    
    fs.readdir(dir, function(err, files){
        var list=[];    

        if (err)
            return callback(err)
      
        for (var idx=0;idx<files.length;idx++){
            if (files[idx].endsWith("." + ext)){
                list.push(files[idx]); 
            }
        }
        
        callback(null, list);
    });
};
