var express = require('express');
var fs = require("fs");
var cors = require('cors');

var app = express();
app.use(cors());


// Server port
var HTTP_PORT = 8080 

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});


app.get('/listUsers', function (req, res) {
    fs.readFile( "data/users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
    });
 })
 


// Root endpoint
app.get("/", (req, res, next) => {
   res.json({"message":"Ok"})
});


// Default response for any other request
app.use(function(req, res){
    res.status(404);
});








