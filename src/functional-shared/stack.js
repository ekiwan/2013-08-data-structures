var makeStack = function(){
  var stack = {};
  stack.storage = {};
  stack.stackSize=0;
  _(stack).extend(stackMethods);
  return stack; 
 }; 
  
stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

stackMethods.pop = function(){
var popped = this.storage[this.stackSize - 1];
delete this.storage[this.stackSize - 1];
this.stackSize && this.stackSize--;
return popped;
};

stackMethods.size = function(){
  return this.stackSize;
};

