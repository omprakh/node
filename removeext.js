const express=require('express');
const path=require('path');
const app =express();
const pathfolder = path.join(__dirname,'public');
/* this is start templete file routing */
app.set('view engine','ejs');
app.get('/profile',(req,res)=>{
    const user={
        name:'om prakash verma',
        email:'omprakhvermaji@gmail.com',
        city:'ayodhya',
        skills:['php','react','c++','node','java']
        
    };
res.render('profile',{user});
})

app.get('/login',(req,res)=>{
    res.render('login');
})
/* this is  end of templete file routing */

app.get('/index',(req,res)=>{
    res.sendFile(`${pathfolder}/home.html`);

});
app.get('/help',(req,res)=>{
    res.sendFile(`${pathfolder}/help.html`);

});

app.get('/about',(req,res)=>{
    res.sendFile(`${pathfolder}/about.html`);

});
app.get('*',(req,res)=>{
    res.sendFile(`${pathfolder}/404.html`);
});
app.listen(8004);

