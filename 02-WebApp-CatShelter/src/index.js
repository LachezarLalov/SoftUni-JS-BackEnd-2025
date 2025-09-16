import http from 'http';
import fs from 'fs/promises';

import cats from './cats.js';
// console.log(cats.map((cat) => cat.name));
const server = http.createServer(async (req, res) => {
	let html;

	if (req.method === 'POST') {
		console.log('POST HAS BEEN MADE');

		let data = '';

		req.on('data', (chunk) => {
			data += chunk.toString();
		});

		req.on('end', () => {
			const searchParams = new URLSearchParams(data);

			const newCat = Object.fromEntries(searchParams.entries());
			newCat.id = cats.length + 1;
			cats.push(newCat);
			//TODO redirect to home page
		});
	}

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

	return cats.length > 0
		? html.replaceAll(
				'{{cats}}',
				cats.map((cat) => catTemplate(cat)).join('\n')
		  )
		: html.replaceAll(
				'{{cats}}',
				`<H2>THERE ARE NO CATS...\nWe are sorry!</H2>`
		  );
}
async function addBreedView() {
	const html = await readFile('./src/views/addBreed.html');

	return html;
}
async function addCatView() {
	const html = await readFile('./src/views/addCat.html');

	return html;
}
