const express=require('express');
const product =require("./mongoosecollection.js")
require('./mongooseconn');
const app=express();
app.use(express.json());

app.post('/',async(req,res)=>{
 let data = new product(req.body);
 let result =await data.save();
 res.send(result);
    console.warn(result);
});
app.get('/list',async(req,res)=>{
    let data =await product.find();// don't need to pass schema in product model(mongoosecollection file)
    res.send(data);

});
app.delete('/delete/:_id',async(req,res)=>{
    console.log(req.params);
    let data =await product.deleteOne(req.params)
    // don't need to pass schema in product model(mongoosecollection file)
    res.send(data);

});
app.put('/update/:_id',async(req,res)=>{
    console.log(req.params);
    let data =await product.updateOne(req.params,{$set:req.body})
    // don't need to pass schema in product model(mongoosecollection file)
    res.send(data);

});
app.listen(3003)