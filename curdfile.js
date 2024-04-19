const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crudfile');
const filepath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filepath,'this is simple text file');  //cread new file
// fs.readFile(filepath,'utf8',(err,item)=>{      //read file data
//     console.log(item);
// });
// fs.appendFile(filepath,' and filename is  apple.txt',(err)=>{ //update file content
//     if(!err) console.log('file is updated');
// })
// fs.rename(filepath,`${dirPath}/fruit.txt`,(err)=>{          // rename the file path
//     if(!err) console.log('file rename succesfully');
// });
fs.unlinkSync(`${dirPath}/fruit.txt`);           // delete the file path