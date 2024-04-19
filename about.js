const express=require('express');
const path=require('path');
const app = express();
const publicfolder=path.join(__dirname,'public');
app.use(express.static(publicfolder));
app.listen(8001);

