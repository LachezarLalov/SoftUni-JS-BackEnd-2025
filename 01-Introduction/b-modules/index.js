console.log('Hello NodeJS!');

import fs from 'fs';
// CommonJS import syntax
// const calculator = require('./calculator.js');

// ESM import syntax
import { calculator } from './calculator.js';
const sum = calculator.sum;

console.log(sum(5, 12));

// Using core modules

console.log(fs.readFileSync('text.txt', 'utf8'));
console.log(fs.readdirSync('./'));
