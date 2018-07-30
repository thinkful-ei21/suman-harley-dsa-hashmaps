'use strict';
const HashMap = require('./HashMap');
const testArray = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];

//[[],[],[]]
let resultArray = [
  []
];

testArray.forEach(string => {
  let hashedValue = stringToHash(string);
  if(resultArray.length === 0){
    resultArray.push([string]);
  }else{
    for(let i =0 ; i < resultArray.length; i++){
      if(stringToHash(resultArray[0][0]) === hashedValue){
        resultArray[i].push(string);
      }else{
        resultArray.push(string);
      }
    }
  }
});
console.log(resultArray);

// [
//   ['east','teas'],
//   [],
//   []
// ];

function stringToHash(string) 
{
  let hash = new HashMap(); 
  string = string.toLowerCase(); 
  for(let i=0; i< string.length; i++)
  { 
    try{ 
      let count = hash.get(string[i]); 
      hash.set(string[i],++count);
    }catch(e){ 
      hash.set(string[i],1);
    }
  } 
  return hash; 
}