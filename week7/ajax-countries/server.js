// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan')
var countries = require('./model/countries.json')

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes \\
app.get('/', function(request, response){
  response.sendFile('./countries.html',{
      root:'/Users/Joshua/workspace/lecture-notes/week7/ajax-countries/public'
  })
});


app.get('/countries', function(request, response){
    console.log('Country is loaded', countries)
    response.send(countries)
});

app.get('/search', function(request, response){
    console.log('Search is working', request.query.name)

    var result = countries.filter(function(element){
        // if (element.name.toLowerCase() == request.query.name.toLowerCase()){
        //     return true;
        // }
        // else {
        //     return false;
        // }
        return element.name.toLowerCase() == request.query.name.toLowerCase()
    });
    console.log(result)

    response.send(result);
})


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
