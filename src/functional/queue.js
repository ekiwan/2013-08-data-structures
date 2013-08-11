var makeQueue = function(){
  var storage = {};
  var size = 0;
  var queue = {};

  queue.enqueue = function(value){
    for (var i = size; i > 0; i--) {
      storage[i] = storage[i - 1];
    }
    storage[0] = value;
    size ++;            
  };

  queue.dequeue = function(){
    var front = storage[size - 1];
    delete storage[size -1];
    size && size--;
    return front;
  };

  queue.size = function(){
    return size;
  };

  return queue;
};