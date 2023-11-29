const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var usersRouter = require('./controllers/users');
var productsRouter = require('./controllers/allproducts');

const app = express();

app.use(express.json()); // Middleware tells app to use json
app.use(cors());
app.use('/users/',usersRouter);
app.use('/allproducts/',productsRouter);

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,PATCH,OPTIONS');
  });
  

// DB Connection
mongoose.connect('mongodb://127.0.0.1:27017/Enterprise');

app.listen(3001, function(err){
    if(err) console.log(err);
    console.log('server is running on port 3001.');
})
