var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/chat', function (req, res){
  res.sendFile(__dirname +'/index.html');
});

io.emit('some event', { for: 'everyone' });

io.on('connection', function(socket){
  socket.broadcast.emit('hi');
  socket.on('chat message', function(msg){
     io.emit('chat message', msg);
   });
   socket.on('disconnect', function(){
     console.log('user disconnect');
   });
});


  http.listen(3000, function(){
  console.log('listening on *:3000');
});
