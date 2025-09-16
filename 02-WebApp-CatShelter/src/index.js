import http from 'http';

import homeHtml from './home.html.js';
import css from './site.css.js';

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.writeHead(200, { 'content-type': 'text/html' });

		res.write(homeHtml);
	} else if (req.url === '/styles/site.css') {
		res.writeHead(200, { 'content-type': 'text/css' });
		res.write(css);
	}

	res.end();
});

server.listen(5000);

console.log('Server running on http://localhost:5000...');
