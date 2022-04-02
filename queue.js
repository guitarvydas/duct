function Queue () {
    this.queue = [];
    this.empty = function () { return (0 === this.queue.length) };
    this.enqueue = function (item) { this.queue.push (item); };
    this.dequeue = function () { return this.queue.pop (); };
}
