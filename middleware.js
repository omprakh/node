const express = require('express');
const reqFilter = require('./middlewaredata');
const app  = express();
const route = express.Router();


//app.use(reqFilter);
route.use(reqFilter);
app.get('/',(req,res)=>{
res.send('<h1>welcome to home page</h1>');
});
app.get('/user',reqFilter,(req,res)=>{
    res.send('<h1>welcome to user page</h1>');
})
route.get('/about',(req,res)=>{
    res.send('<h1>welcome to about page</h1>');
})
route.get('/contact',(req,res)=>{
    res.send('<h1>welcome to contact page</h1>');
})
app.use('',route);
app.listen('8005');