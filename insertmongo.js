const dbconnect = require('./mongoconn');

const insert =async ()=>{
    const db = await dbconnect();
    //console.warn(db);
    const result =await db.insertMany([
    {name:'poco m6',brand:'xiomi',price:10000,category:'mobile'},
    {name:'vivo m6',brand:'vivo',price:15000,category:'mobile'},
])
   if(result.acknowledged){
    console.log('datat insert');
   }else{
    console.log('data not inserted');
   }
}
insert();