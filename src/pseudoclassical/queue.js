var Queue = function() {
  this.storage = {};
  this.queueSize = 0;
};

Queue.prototype.enqueue = function(value){
  for (var i = this.queueSize; i > 0; i--) {
    this.storage[i] = this.storage[i - 1];
  }
  this.storage[0] = value;
  this.queueSize ++;            
};

Queue.prototype.dequeue = function(){
  var front = this.storage[this.queueSize - 1];
  delete this.storage[this.queueSize -1];
  this.queueSize && this.queueSize--;
  return front;
};

Queue.prototype.size = function(){
  return this.queueSize;
};




