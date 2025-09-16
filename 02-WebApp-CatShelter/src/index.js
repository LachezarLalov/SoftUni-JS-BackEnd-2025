import http from 'http';
import fs from 'fs/promises';

const server = http.createServer(async (req, res) => {
	let html;

	switch (req.url) {
		case '/':
			html = await homeView();
			break;

		case '/cats/add-breed':
			html = await addBreedView();
			break;

		case '/styles/site.css':
			const cssSite = await fs.readFile('./src/styles/site.css');
			res.writeHead(200, { 'content-type': 'text/css' });
			res.write(cssSite);
			return res.end();
		default:
			return res.end();
	}

	res.writeHead(200, { 'content-type': 'text/html' });
	res.write(html);
	res.end();
});

server.listen(5000);

console.log('Server running on http://localhost:5000...');

async function homeView() {
	const html = await fs.readFile('./src/views/index.html', {
		encoding: 'utf-8',
	});
	return html;
}
async function addBreedView() {
	const html = await fs.readFile('./src/views/addBreed.html', {
		encoding: 'utf-8',
	});
	return html;
}
