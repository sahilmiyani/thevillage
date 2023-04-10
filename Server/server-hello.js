var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

var fs = require("fs");

app.get('/hello', function (req, res) {
  var sayHello ="Hello from Server!"
  console.log( sayHello );
  res.end( sayHello );
})



// Server port
var HTTP_PORT = 8080 

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

