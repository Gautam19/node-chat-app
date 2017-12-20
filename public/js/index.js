var socket = io();

    socket.on('connect', () => {
      console.log('Connected to server');



      socket.emit('createMessage',{
        from:'baggu@bestroomies.com',
        text:'Howdy'

         });
    });

    
    




    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    socket.on('newMessage',function(message){
    	console.log('newMessage',message);
    });