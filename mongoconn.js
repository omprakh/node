const {MongoClient} = require('mongodb');
const url='mongodb://localhost:27017';
const database='ecomm';
const client=new MongoClient(url);

async function dbconnect()
{
    let result = await client.connect();
     db = result.db(database);
     return db.collection('product');
}

module.exports = dbconnect;

//console.warn(dbonnect());