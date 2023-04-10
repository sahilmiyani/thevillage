const express = require('express');
const sqlite3 = require('sqlite3').verbose();
var cors = require('cors');

// Create an instance of Express
const app = express();
app.use(cors());


// Enable JSON parsing middleware
app.use(express.json());

// Connect to the SQLite3 database
const db = new sqlite3.Database('./data/store.db',(err)=>{
   if(err){
    console.log(err);
   }
   console.log("database Store connected..")
});

app.get('/products',(req,res)=>{
    db.all('SELECT * FROM Products',(err,rows)=>{
        if(err){
            console.log(err)
        }else{
            console.log('/product API caled');
            res.json(rows);
        }
    })
});
  
// Start the server
app.listen(8000, () => {
  console.log('Server started on port 8080')
});