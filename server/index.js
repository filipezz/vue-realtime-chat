const app = require('express')();
const express = require('express');
const path = require('path')
const http = require('http').Server(app);
const io = require('socket.io')(http);

let connectedUsers = []

io.on('connection', (socket) => {
  socket.on('username', (username) => {
    connectedUsers = [...connectedUsers, {
      id: socket.id,
      username
    }];
    io.emit('connectedUsers', connectedUsers)
  })

  io.emit('connectedUsers', connectedUsers)

  socket.on('benssagem', (msg) => {
    const currentUser = connectedUsers.filter(user => socket.id === user.id)[0]
    io.emit('benssagemDoBack', {
      username: currentUser.username,
      msg,
    });
  });

  socket.on('disconnect', () => {
    connectedUsers = connectedUsers.filter(user => user.id !== socket.id)
  });

});

http.listen(3000, () => {
  console.log('server started');
});
