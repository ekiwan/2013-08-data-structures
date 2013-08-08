var Stack = function() {
   //Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var stack = Object.create(Stack.stackMethods);
  stack.storage = {};
  stack.stackSize=0;

  return stack;
};

Stack.stackMethods = {};

Stack.stackMethods.push = function(value){
    this.storage[this.stackSize] = value;
    this.stackSize++;
    return value;
  };

Stack.stackMethods.pop = function(){
    var popped = this.storage[this.stackSize-1];
    delete this.storage[this.stackSize];
    this.stackSize && this.stackSize--;
    return popped;
  };

Stack.stackMethods.size = function(){
    return this.stackSize;
  };


