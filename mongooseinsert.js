const mongoose = require('mongoose');
 mongoose.connect("mongodb://localhost:27017/ecomm");
    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number,
        brand:String,
        category:String
    });

const insertdb = async ()=>{
    const product = mongoose.model('product',ProductSchema);
    let data = new product({name:"s3",price:100000,brand:"Samsung",category:"mobile"});
    let result = await data.save();
    console.log(result);

}
//insertdb();
const updatedb=async()=>{
    const product = mongoose.model('product',ProductSchema);
    let data =await product.updateOne({name:"s3"},{$set:{price:12324}})
    console.log(data);
}
//updatedb(); 
const deletedb =async ()=>{
    const data = mongoose.model('product',ProductSchema);
    const result = await data.deleteOne({name:"s3"});
    console.log(result);
}
//deletedb();

const finddb =async ()=>{
    const data = mongoose.model('product',ProductSchema);
    const result = await data.find({name:'s3'});
    console.warn(result);
} 
finddb();