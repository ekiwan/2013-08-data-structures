var makeQueue = function(){
  var queue = {};
  queue.storage = {};
  queue.queueSize = 0;
  _(queue).extend(queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  for (var i = this.queueSize; i > 0; i--) {
    this.storage[i] = this.storage[i - 1];
  }
  this.storage[0] = value;
  this.queueSize ++;            
};

queueMethods.dequeue = function(){
  var front = this.storage[this.queueSize - 1];
  delete this.storage[this.queueSize -1];
  this.queueSize && this.queueSize--;
  return front;
};

queueMethods.size = function(){
  return this.queueSize;
};

