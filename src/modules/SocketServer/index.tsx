const http = require('http');
const socketIo = require('socket.io');

// Create an HTTP server
const server = http.createServer();
const io = socketIo(server);

// Handle client connections
io.on('connection', socket => {
  console.log('Client connected');

  // Handle messages from the client
  socket.on('message', message => {
    console.log(`Received message from client: ${message}`);
    socket.emit('message', `Server received: ${message}`);
  });

  // Handle client disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  // Handle any errors
  socket.on('error', error => {
    console.error(`Socket error: ${error.message}`);
  });
});

const PORT = 3000;

// Start listening on the specified port
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});