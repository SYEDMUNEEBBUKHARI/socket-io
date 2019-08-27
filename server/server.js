const path=require('path');
const express=require('express');
const http=require('http');
const socketio=require('socket.io');
const port = process.env.PORT || 3000;
const pubpath=path.join(__dirname , '../public');
var app=express();
var server= http.createServer(app);
var io= socketio(server);
app.use(express.static(pubpath));
io.on('connection',(socket)=>{

    console.log('new user connected');
    socket.on('disconnect', ()=>{

        console.log('user disconnected ');
    });


});

server.listen(port,()=>{console.log('3000')});