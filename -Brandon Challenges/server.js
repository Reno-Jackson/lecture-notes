// Create a 2 Field Form that takes a Username and Password and stores it on the backend

// Requires
var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose');


var app = express();

var PORT = process.env.port || 1337;

app.use(bodyParser.json(),bodyParser.urlencoded({extended:true}));

// Include Static Routes for Serving up static html files
// app.use(express.static('./'));

// Make a Database Connection
mongoose.connect('mongodb://localhost/challenge', function(err){
    if(err) {
        console.log('Mongo Error: ', err);
        process.exit(1);
    }
    else{
        console.log('Mongoose is up and running!');
    }
});

// Call the Routes
app.get('/', (req, res) =>{
    res.sendFile('index.html', {root:'./'})
});

app.listen(PORT, function(err){
    if(err){
        console.log('Server Error: ', err);
        process.exit(1);
    }
    else{
        console.log('Server is up and Running');
    }
});
