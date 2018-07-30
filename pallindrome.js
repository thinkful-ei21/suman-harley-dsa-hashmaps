'use strict';
const HashMap = require('./HashMap');
const testString = 'racecar';
let pall = new HashMap();
let keys = [];
for(let i=0; i< testString.length; i++){
  if(!keys.includes(testString[i])){
    keys.push(testString[i]);
  }
  try{
    let count = pall.get(testString[i]);
    pall.set(testString[i],count++);    
  }catch(error){
    pall.set(testString[i],1);    
  }  
}

let pallindrome = 


          