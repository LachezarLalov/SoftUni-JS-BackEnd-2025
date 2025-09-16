import http from 'http';

const server = http.createServer((req, res) => {
  res.write('Hello World! \nThis is running server... ');

  res.end();
});

server.listen(5000);

console.log('Server running on http://localhost:5000...');
