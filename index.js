const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
const data = require('./data.json')
app.get('/',(req,res) => {
    res.send('Hello world');
})

app.get('/api/todosList', (req,res) => {
    res.send(data);
})

app.get('/api/todosList/:id',(req,res) =>{
    const todo = data.find(a => a.id === parseInt(req.params.id));
    if(todo) {
        res.status(200).send(todo);
    }
    else{
     res.send('not found');
    }
})

app.post('/api/todosList', (req, res) => {
    const newTodo = {
        "userId" : req.body.userId,
        "id" : req.body.id,
        "title" :req.body.title,
        "completed" : req.body.completed
    }
    data.push(newTodo);
    res.send(newTodo);
})


app.listen(3000,()=>{
    console.log('listening on port 3000');
})