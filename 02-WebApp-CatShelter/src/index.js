import http from 'http';
import fs from 'fs/promises';

import cats from './cats.js';

const server = http.createServer(async (req, res) => {
	let html;

	switch (req.url) {
		case '/':
			html = await homeView();
			break;

		case '/cats/add-breed':
			html = await addBreedView();
			break;

		case '/cats/add-cat':
			html = await addCatView();
			break;

		case '/styles/site.css':
			const cssSite = await readFile('./src/styles/site.css');
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

function catTemplate(cat) {
	return `	
	<li>
		<img
			src="${cat.imageUrl}"
			alt="${cat.name}"
		/>
		<h3></h3>
		<p><span>Breed: </span>${cat.breed}</p>
		<p>
			<span>Description: </span>${cat.description}
		</p>
		<ul class="buttons">
			<li class="btn edit">
				<a href="">Change Info</a>
			</li>
			<li class="btn delete">
				<a href="">New Home</a>
			</li>
		</ul>
	</li>
`;
}

function readFile(path) {
	return fs.readFile(path, { encoding: 'utf-8' });
}

async function homeView() {
	const html = await readFile('./src/views/index.html');

	const catsHtml = cats.map((cat) => catTemplate(cat)).join('\n');

	const result = html.replace('{{cats}}', catsHtml);

	return result;
}
async function addBreedView() {
	const html = await readFile('./src/views/addBreed.html');

	return html;
}
async function addCatView() {
	const html = await readFile('./src/views/addCat.html');

	return html;
}
