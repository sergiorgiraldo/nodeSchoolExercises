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

fs.readdir(process.argv[2], function(err, files){
    for (var idx=0;idx<files.length;idx++){
        if (files[idx].endsWith("." +process.argv[3])){
            console.log(files[idx]); 
        }
    }
});
