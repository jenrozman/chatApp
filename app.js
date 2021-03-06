const express = require('express');//same as include
const app = express();
const io = require('socket.io')();//activates the chat plugin. socket is like a tin can connected to the user tin can, maintain connection longer

//serve up static files
app.use(express.static('public')); //use this folder to serve up all static stuff, like js css etc

//add routes
app.use(require('./routes/index'));
app.use(require('./routes/contact'));
app.use(require('./routes/portfolio'));

const server = app.listen(3000, () => {
  console.log('listening on port 3000');
}); //added the const server so it knows to listen to this

  io.attach(server); //io-socket. knows to listen for the server connnection to send the messages back and forth

  io.on('connection', socket => { // socket => same as function (socket){ } but short hand works for just one thing
  console.log('a user has connected woo!');
  io.emit('chat message', { for : 'everyone', message : `${socket.id} is here!`});

//disconnect message
//io.emit('disconnect message', { for : 'everyone', message : `${socket.id} has left!`});

//handle msg from client
socket.on('chat message', msg => {
  io.emit('chat message', {for : 'everyone', message : msg});//listening for a chat msg
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected, awh');
    io.emit('disconnect message', `${socket.id} took off!`); //dont have to do the for if its just a message
  });

});
