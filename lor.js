'use strict';
const HashMap = require('./HashMap');

let lor = new HashMap();

lor.set('Hobbit','Bilbo');
lor.set('Hobbit','Frodo');
lor.set('Wizard','Gandolf');
lor.set('Human','Aragon');
lor.set('Elf','Legolas');
lor.set('Maiar','The Necromancer');
lor.set('Maiar','Sauron');
lor.set('RingBearer','Gollum');
lor.set('LadyOfLight','Galadriel');
lor.set('HalfElven','Arwen');
lor.set('Ent','Treebeard');
console.log(lor.get('Hobbit'));
console.log(lor.get('Wizard'));
console.log(lor.get('Human'));
console.log(lor.get('Elf'));
console.log(lor.get('Maiar'));
console.log(lor.get('RingBearer'));
console.log(lor.get('LadyOfLight'));
console.log(lor.get('HalfElven'));
console.log(lor.get('HalfElven'));
