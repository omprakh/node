module.exports = reqFilter1 = (req,res,next)=>{
    //console.log('reqFilter');
    if(!req.query.age)
    {
        res.send('Please provide the age !');
    }else if(req.query.age<18){
        res.send('you can not access this');
    }else{
        next();
    }
}