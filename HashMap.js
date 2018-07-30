'use strict';
class HashMap{
  constructor(initialCapacity=8){
    this.length = 0;
    this._slots = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
  }

  static _hashString(string){
    let hash = 5381;
    for(let i=0; i< string.length; i++){
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash; 
    }
    return hash >>> 0;    
  }

  set(key,value){
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if(loadRatio > HashMap.MAX_LOAD_RATIO){
      this._resize(this.capacity * HashMap.SIZE_RATIO);
    }
    const index = this._findSlot(key);
    this._slots[index] = {
      key,
      value,
      deleted: false
    };
    this.length++;
  }

  //findSlot
  

}

HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;