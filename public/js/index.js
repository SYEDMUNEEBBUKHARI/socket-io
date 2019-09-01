
var socket=io();

socket.on('connect', function (){

    console.log('connected to server');
});


socket.on('disconnect', function (){

console.log('disconnected from server');
});
socket.on('newmsg', function(data){
    console.log(data);
var li=jQuery('<li></li>');
li.text(`${data.from}: ${data.text}`);

jQuery('#listt').append(li);

});




jQuery('#message-form').on('submit', function(e){
    e.preventDefault();
   
    socket.emit('createmsg',{from: 'frank',
    text: jQuery('[name=message-wr]').val()}, function(data){
        console.log('got it' , data);
    });

});