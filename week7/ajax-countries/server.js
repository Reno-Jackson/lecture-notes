// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan')

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes \\
app.get('/', function(request, response){
  response.sendFile('./countries.html',{
      root:'/Users/Joshua/workspace/lecture-notes/week7/ajax-countries/'
  })
});


app.get('/countries', function(request, response){
    console.log('Country is loaded')
    response.send('TEST')
});


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
