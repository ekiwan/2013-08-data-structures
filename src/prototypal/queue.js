var Queue = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here
  var queue = Object.create(Queue.queueMethods);
  queue.storage = {};
  queue.queueSize = 0;

  // Hint: set an initial value here
  // Implement the methods below
  return queue;
};


Queue.queueMethods = {};

  Queue.queueMethods.enqueue = function(value){
    for (var i = this.queueSize; i > 0; i--){
      this.storage[i] = this.storage[i-1];
    }
    this.storage[0] = value;
    this.queueSize++;
  };

  Queue.queueMethods.dequeue = function(){
   var ind = String(this.queueSize-1);
   var dequeued = this.storage[ind];
   delete this.storage[ind];
   this.queueSize && this.queueSize--;
   return dequeued;
  };

  Queue.queueMethods.size = function(){
    return this.queueSize;
  };

