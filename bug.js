const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
//The above code will work fine, but if you try to access the server from another machine using the public ip, the connection will be refused.
//This is because the server is only listening on the local network interface.
//To make the server accessible from other machines, you need to specify the IP address to listen on.
//This can be done by passing the IP address as the first argument to the listen method.
//Example:
//server.listen(8080, '0.0.0.0');