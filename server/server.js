const path=require('path');
const express=require('express');
const pubpath=path.join(__dirname , '../public');
const port=process.env.PORT || 3000;
var app=express();
app.use(express.static(pubpath));
app.listen(port,()=>{console.log('3000')});
