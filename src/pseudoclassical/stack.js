var Stack = function() {
  this.storage = {};
  this.stackSize=0; 
};
  

Stack.prototype.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

Stack.prototype.pop = function(){
var popped = this.storage[this.stackSize - 1];
delete this.storage[this.stackSize - 1];
this.stackSize && this.stackSize--;
return popped;
};

Stack.prototype.size = function(){
  return this.stackSize;
};


