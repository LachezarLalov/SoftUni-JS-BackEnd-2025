import http from 'http';
import { log } from 'console';

const server = http.createServer((req, res) => {
     console.log('Requested webserve r');

     const url = new URL(
          'https://en.wikipedia.org/wiki/HTTPS#Usage_in_websites',
     );
     const searchParams = new URLSearchParams(req.url.split('?')[1]);
     log(searchParams);

     res.writeHead(200, {
          'content-type': 'text/html',
     });

     res.write('<H1>Hello from server!<H1>');
     res.end();
});

server.listen(5001);
console.log('Serever is running on http://localhost:5001...');
