const path=require('path');
const express=require('express');
const http=require('http');
const socketio=require('socket.io');
const port = process.env.PORT || 3000;
const pubpath=path.join(__dirname , '../public');
const {generatemessage, generatelocationmessage}=require('./utils/message');
var app=express();
var server= http.createServer(app);
var io= socketio(server);
app.use(express.static(pubpath));
io.on('connection', (socket)=>{

    console.log('new user connected');
    socket.on('disconnect', ()=>{

        console.log('user disconnected ');
    });
   socket.emit('newmsg',generatemessage('admin','welcome from admin'));



   socket.broadcast.emit('newmsg', generatemessage('admin','new user joined'));



  socket.on('createmsg',(msg,callback)=>{
console.log(msg);


io.emit('newmsg',generatemessage(msg.from,msg.text));
callback(msg.from,msg.text);
  });

  socket.on('createlocationmsg', function(data){
    io.emit('newlocationmsg', generatelocationmessage('admin', data.latitude , data.longitude));
  });
   

    
});


server.listen(port,()=>{console.log('3000')});