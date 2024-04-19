const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');
console.warn(dirPath);
for(i=0;i<5;i++)
{
    fs.writeFileSync(dirPath+"/hello"+i+".txt",'this is test dadat');
    //fs.writeFileSync(`hellow${i}.txt`,'this is test data');

}
fs.readdir(dirPath,(err,files)=>{
   files.forEach((item)=>{
console.log(item)

   })
})