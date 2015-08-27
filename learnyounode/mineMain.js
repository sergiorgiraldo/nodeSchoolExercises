var mineModule = require("./mine");

mineModule(process.argv[2], process.argv[3], function(err,data) {
    if (err)
        return console.error('There was an error:', err)

    console.log(data);
});