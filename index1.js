const app=require('./app')
//console.log(app.x);
//console.log(app.z());
const arr=[1,3,5,7,9,11,12,16,17];
let res=arr.filter(item=>{
    return item>=3;
});
console.log(res);
const fs=require('fs');
fs.writeFileSync("om1.txt","code step by step");
console.log(__dirname);
console.log(__filename);
const http = require('http');


http.createServer((req,res)=>{
    res.write("<h1>this is first node program.</h1>");
    res.end();
}).listen(45000);