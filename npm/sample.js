import { isIcloud5gb } from './index.js';

const answer = isIcloud5gb();

console.log(`Is iCloud's free tier still 5GB? ${answer ? 'Yes.' : 'No.'}`);

if (answer) {
  console.log('It is. It always has been.');
}
