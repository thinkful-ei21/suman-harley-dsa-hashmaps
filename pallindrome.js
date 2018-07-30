'use strict';
const HashMap = require('./HashMap');
const testString = 'racecar';


function palindrome(string) {
  let pal = new HashMap();
  string = string.toLowerCase();
  for(let i=0; i< string.length; i++){
    try{
      let count = pal.get(string[i]);
      pal.set(string[i],++count);    
    }catch(e){
      pal.set(string[i],1);    
    }  
  }

  //console.log(pal);

  let oneOdd = false;
  
  for(let i=0; i< string.length; i++){
    try{
      let count = pal.get(string[i]);
      if (count % 2 === 1) {
        if(!oneOdd) {
          oneOdd = true;
        } else {
          return false;
        }
      } else {
        pal.remove(string[i]);
      }  
    }catch(e){
      continue;   
    }  
  }

  return true;
}

console.log(palindrome('acecaRr'));
console.log(palindrome('north'));