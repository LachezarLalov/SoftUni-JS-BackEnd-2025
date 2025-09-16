import fs from 'fs/promises';

const dbSerialized = await fs.readFile('./src/db.json');
const db = JSON.parse(dbSerialized);

export async function getCats() {
	return db.cats;
}

export async function getBreeds() {
	return db.breeds;
}

export async function addCat(cat) {
	// Add cat to the buffer array
	db.cats.push(cat);

	// Save cat to the database
	await fs.writeFile('./src/db.json', JSON.stringify(db, null, 2), {
		encoding: 'utf-8',
	});
}
