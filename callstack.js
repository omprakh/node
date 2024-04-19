console.log('first console');
setTimeout(()=>{
    console.log('2000 milisecond call');
},2000);
setTimeout(()=>{
    console.log("0 milisecond call");
},0);
console.log('second console');