const dbconnect = require('./mongoconn');
// dbconnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.warn(data)
//     });
// }) 
const main = async()=>{
    let data = await dbconnect();
    data =await data.find().toArray();
    console.warn(data);
}
main();