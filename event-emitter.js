const express = require('express');
const EventEmitter=require('events');
const app = express();
const event = new EventEmitter();

let count =0;
event.on('countAPI',()=>{
    count++;
    console.log("no of time api called ="+count);
})

app.get('/',(req,res)=>{
    res.send("event called");
    event.emit('countAPI');
})
app.get('/update',(req,res)=>{
    res.send("update event called");
    event.emit('countAPI');
})
app.listen(4004);