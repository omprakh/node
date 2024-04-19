const dbconnect=require('./mongoconn');

const updatedata =async ()=>{
const db=await dbconnect();
const result = await db.updateOne({name:'poco m6'},{$set:{name:'poco m5'}})
if(result.modifiedCount>0){
    console.log('data updated');
}else{
    console.log('data not updated');
}
}
updatedata();