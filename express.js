const express = require('express');
const app = express();
app.get('',(req,res)=>{
    console.log("data sent by browser =>>>", req.query.name);
    res.send('<h1>welcome to home page </h1>'+req.query.name);
    
})
app.get('/about',(req,res)=>{
    res.send(`<input type ="text" placeholder="User name" value="${req.query.name}"/>
    <button>click me</button>
    <a href="/help"> help page</a>
     `);
});
app.get('/help',(req,res)=>{
    res.send(`<h1>hellow this is help page</h1>
    <a href="/about"> about page</a>`);
});

app.get('/contact',(req,res)=>{
    res.send([{name:'test'},{name:'test'}]);
});
app.listen(8001);
