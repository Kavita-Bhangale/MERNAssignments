const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

const users = [{name: "Abc", salary: 456123},
                    {name: "Xyz", salary: 456123},
                    {name: "Pqr", salary: 456123}];

app.get('/api', (req, res) => {
    res.send("/api, v1.0.0");
})

app.get('/api/users', (req, res) => {
    res.json(users);
})

app.get('/api/users/:name', (req,res) => {
    console.log(req.params);
    req.send(users.filter((users) => users.name === req.params.name));
})

// registration example
app.post('/api/users', (req, res) => {
    console.log(req.body.name,req.body.salary);
    const {name,salary} = {...req.body};
    users.push({name,salary});
    res.json(users);
})

app.put('/api/users', (req,res) => {
    users[0].name = req.body.name;
    users[0].salary = req.body.salary;
    res.json(users);
})


app.delete('/api/users',(req,res) => {
    users.pop({name : req.body.name, salary : req.body.salary});
    res.json(users);
})

app.listen(3001, () => {
    console.log("Server is Started");
})
