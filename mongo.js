const {MongoClient} = require('mongodb');
//const MongoClient = require('mongodb').MongoClient; //we can write as well for first line.
const url = 'mongodb://localhost:27017';
const database = 'ecomm';
const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();
    db = result.db(database);
    collection = db.collection('product');
    let response = await collection.find({}).toArray();
    console.log(response);


}
getData();
