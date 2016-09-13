var fs = require('fs');

var originalFile = process.argv[2];

// console.log("Trying to copy " + originalFile + " to " + newFile);

fs.readFile(originalFile, function(err, data){
    lines = data.toString(),
    split = lines.split('\n').length-1;
    console.log(split);
});
