var Stack = function() {
   //Hey! Copy your code from src/functional-shared/stack.js and paste it here
  this.storage = {};
  this.stackSize=0;
};

Stack.prototype.push = function(value){
    this.storage[this.stackSize] = value;
    this.stackSize++;
    return value;
  };

Stack.prototype.pop = function(){
    var popped = this.storage[this.stackSize-1];
    delete this.storage[this.stackSize];
    this.stackSize && this.stackSize--;
    return popped;
  };

Stack.prototype.size = function(){
    return this.stackSize;
  };


