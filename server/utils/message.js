var generatemessage= (from , text)=>{

return {
    from ,
    text,
    createdAt: '97'
};

}

var generatelocationmessage=(from,latitude,longitude)=>{

return{

    from,
    url: `https://www.google.com/maps?q=${latitude},${longitude}`
,
createdAt: new Date().getTime()}

}

module.exports={generatemessage, generatelocationmessage};
//module.exports.generatemessage=generatemessage;