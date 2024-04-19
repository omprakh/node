const dbconnect = require('./mongoconn');
const express = require('express');
const mongodb = require('mongodb');// this is used for mongo object id
const app = express();
app.use(express.json());
app.get('',async(req,res)=>{
    let data=await dbconnect();
    data =await data.find().toArray();
    res.send(data);

});

app.post('',async(req,res)=>{
    let db = await dbconnect();
    let result =await db.insertOne(req.body)
    //console.log(req.body);
    res.send(result)
})
app.put('/:name',async(req,res)=>{
    let db = await dbconnect();
    //let result = db.updateOne({name:"nokia 10"},{$set:req.body});
    let result = db.updateOne({name:req.params.name},{$set:req.body});
    console.log(req.body)
    res.send({result:"updated"})

});
app.delete('/:id',async(req,res)=>{
    //res.send('id = '+req.params.id);
    let db =await dbconnect();
    let result =await db.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send(result);
})
app.listen(5050);
