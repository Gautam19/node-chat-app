const path = require('path');
const http = require ('http');
const express = require('express');
var app = express();
const socketIO = require('socket.io');
var io = require('socket.io').listen(server);
const publicPath = path.join(__dirname ,'../public');

var port = process.env.PORT || 3000;

var server = http.createServer(app);


app.use( express.static(publicPath));

io.on('connection',(socket) =>{
	console.log('New User Connected');
})





server.listen(port ,() =>{
	console.log(`Server is up on ${port}`);
});