var makeStack = function(){
// Use an object with numeric keys to store values
// Implement the methods below
  var stack = {};
  stack.storage = {};
  stack.stackSize=0;
  _.extend(stack, makeStack.stackMethods);

  return stack;
};

makeStack.stackMethods = {};

makeStack.stackMethods.push = function(value){
    this.storage[this.stackSize] = value;
    this.stackSize++;
    return value;
  };

makeStack.stackMethods.pop = function(){
    var popped = this.storage[this.stackSize-1];
    delete this.storage[this.stackSize];
    this.stackSize && this.stackSize--;
    return popped;
  };

makeStack.stackMethods.size = function(){
    return this.stackSize;
  };


