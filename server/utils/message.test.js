var expect = require('expect');
var {generatemessage}=require('./message');

describe('generatemessage', ()=>{
it('should generate correct message object',()=>{

    var from ='shafat';
    var text='USMAN'
    var message= generatemessage(from, text);
    expect(message.createdAt).toBe('97');
    expect(message.from).toBe('shafat');
    expect(message.text).toBe('USMAN');
  
});

});