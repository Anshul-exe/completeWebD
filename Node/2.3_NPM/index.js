import generateName from "sillyName"
import {randomSuperhero} from 'superheroes';

var sillyName = generateName()
var hero = randomSuperhero();

console.log(`My name is ${sillyName}.`);
console.log(`I am ${hero}!`);
