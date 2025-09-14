import http from 'http';

const server = http.createServer((req, res) => {
  res.write('Hello World');
  res.write('\n');
  res.write('COOL');
  res.write('\n');

  res.end();
});

server.listen(5000);
console.log('Server is running on port http://localhost:5000....');
