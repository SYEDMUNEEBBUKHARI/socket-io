const path=require('path');
const express=require('express');
const pubpath=path.join(__dirname , '../public');
var app=express();
app.use(express.static(pubpath));
app.listen(3000,()=>{console.log('3000')});