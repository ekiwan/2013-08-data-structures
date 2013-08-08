var makeQueue = function(){
  // Use an object with numeric keys to store values
  var queue = {};
  queue.storage = {};
  queue.queueSize = 0;
  _.extend(queue, makeQueue.queueMethods);

  // Hint: set an initial value here
  // Implement the methods below
  return queue;
};

makeQueue.queueMethods = {};

  makeQueue.queueMethods.enqueue = function(value){
    for (var i = this.queueSize; i > 0; i--){
      this.storage[i] = this.storage[i-1];
    }
    this.storage[0] = value;
    this.queueSize++;
  };

  makeQueue.queueMethods.dequeue = function(){
   var ind = String(this.queueSize-1);
   var dequeued = this.storage[ind];
   delete this.storage[ind];
   this.queueSize && this.queueSize--;
   return dequeued;
  };

  makeQueue.queueMethods.size = function(){
    return this.queueSize;
  };

