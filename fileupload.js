const express =require('express');
const multer = require('multer');
const app =express();
const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploadfile")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+ Date.now()+".jpg")
        }
    })
}).single("user_file");
app.post('/',upload,(req,res)=>{
    res.send("file upload1");
});
app.listen('5000');