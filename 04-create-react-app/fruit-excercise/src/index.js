import fruits from "./foods"
import { choice, remove } from './helpers'

let inventory = fruits()
let selection = choice(inventory)

console.log(`I'd like one ${selection}, please`);
console.log(`Here you go: ${remove(inventory, selection)}`);
console.log('MOAR');
console.log(`No! We only have ${inventory} left`);
