//const express = require('express');
//const app = express();

const app = require('express')();

app.get('/', (req,res) => {
res.send('Hello World, Very first express app...');
})

app.listen(3001, () => {
    console.log('server started on 3001 port....');
})