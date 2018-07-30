'use strict';
const HashMap = require('./HashMap');

function stringToHash(string) {
  let hash = new HashMap();
  string = string.toLowerCase();
  for(let i=0; i< string.length; i++){
    try{
      let count = hash.get(string[i]);
      hash.set(string[i],++count);    
    }catch(e){
      hash.set(string[i],1);    
    }  
  }
  return hash;
}

function compareHashes(hash1, hash2) {
  return (JSON.stringify(hash1) === JSON.stringify(hash2));
}
 
function anagramGrouping(arr) {
  let hashArray = [];
  let groupArray = [];
  arr.forEach(string => {
    hashArray.push(stringToHash(string));
    groupArray.push(null);
  });
  //console.log(groupArray);
  //for each string in the array, build a count hashmap
  let i = 0;
  for (i = 0; i < arr.length; i++) {
    if (groupArray[i] === null) {
      groupArray[i] = i;
    } 
    for (let j = i; j < arr.length; j++) {
      if (i === j || groupArray[j] !== null) {
        continue;
      } else {
        if(compareHashes(hashArray[i], hashArray[j])) {
          groupArray[j] = i;
        }
      }
      //console.log(groupArray);
    }
  }
  let returnArray = [];
  
  for (let k = 0; k <= Math.max.apply(Math, groupArray); k++) {
    returnArray.push([]);
  }

  for (let i = 0; i < arr.length; i++) {
    returnArray[groupArray[i]].push(arr[i]);
  }
  return returnArray;
  //where a count hashmap is the same, add it to a group, otherwise start another group
}

const testArray = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];
const hashArray = anagramGrouping(testArray);
//hashArray.forEach(hash => console.log(hash));
console.log(hashArray);

const hash1 = new HashMap();
const hash2 = new HashMap();
hash1.set('test', 1);
hash2.set('test', 1);

console.log(JSON.stringify(hash1) === JSON.stringify(hash2));

