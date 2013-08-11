var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;// Hint: set an initial value here

  // Implement the methods below
  var queue = {};

  queue.enqueue = function(value){
    for (var i = size; i > 0; i--) {
      storage[i] = storage[i - 1];
    }
    storage[0] = value;
    size++;
  };

  queue.dequeue = function(){
    var front = storage[size - 1];
    delete front;
    size && size--;
    return front;
  };

  queue.size = function(){
    return size;
  };

  return queue;
};


/*
0:c
1:b
2:a
*/