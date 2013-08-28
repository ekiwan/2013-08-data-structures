var makeStack = function(){
  var storage = {};
  var size=0; 
  var stack = {};
  

  stack.push = function(value){
    storage[size] = value;
    size++;
  };

  stack.pop = function(){
  var popped = storage[size - 1];
  delete storage[size - 1];
  size && size--;
  return popped;
  };

  stack.size = function(){
    return size;
  };
  return stack;
};

