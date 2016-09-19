// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(request, response){
  response.sendFile('./form.html',{
      root:'/Users/Joshua/workspace/lecture-notes/week6/signup-form/myapp/'
  })
});

app.post('/formsubmit', function(request,response){
    console.log("xxx", request.body)
    response.redirect('/success')
})

app.get('/success', function(request, response){
    console.log('Got to success')
    response.send('success')
})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
