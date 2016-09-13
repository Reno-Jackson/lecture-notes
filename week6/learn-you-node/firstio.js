    var fs = require('fs')

    var contents = fs.readFileSync(process.argv[2]),
        lines = contents.toString(),
        split = lines.split('\n').length-1;
        console.log(split)
