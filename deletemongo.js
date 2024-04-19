const dbconnect =require('./mongoconn');

const deletedata=async()=>{
    let db=await dbconnect();
    let result = await db.deleteMany({'name':'poco m5'})
    if(result.deletedCount>0)
    {
        console.log('record deleted');
    }else{
        console.log('record not deleted');
    }
}
deletedata();
