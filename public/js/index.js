
var socket=io();

socket.on('connect', function (){

    console.log('connected to server');
});


socket.on('disconnect', function (){

console.log('disconnected from server');
});
socket.on('newmsg', function(data){
    console.log(data);
    var formattedtime=moment(data.createdAt).format('h:mm a')
var li=jQuery('<li></li>');
li.text(`${data.from}: ${data.text}   ${formattedtime}`);

jQuery('#listt').append(li);

});
socket.on('newlocationmsg', function(message){
var formattedtime=moment(message.createdAt).format('h:mm a');
    var li=jQuery('<li></li>');
    var a=jQuery('<a target="_blank">Click For Location</a>');
    li.text(`${message.from}  ${formattedtime}`);
    a.attr('href', message.url);
    li.append(a);
    jQuery('#listt').append(li);
});



jQuery('#message-form').on('submit', function(e){
    e.preventDefault();
   var messagebox=jQuery('[name=message-wr]');
    socket.emit('createmsg',{from: 'User',
    text: messagebox.val()}, function(){
        messagebox.val('');
    });

});

var locbutton=jQuery('#locationbtn');
locbutton.on('click',function(){
if(!navigator.geolocation)
{
    return alert('not available');
}

locbutton.attr('disabled','disabled').text('Sending......');
navigator.geolocation.getCurrentPosition(function(position){
  //  console.log(position);
  locbutton.removeAttr("disabled").text('Send location');
  socket.emit('createlocationmsg',{
latitude: position.coords.latitude,
longitude: position.coords.longitude
  })
},function(){
    locbutton.removeAttr("disabled").text('Send location');
    alert('not able to access');
    
})

});