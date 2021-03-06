function Queue () {
    this.queue = [];
    this.empty = function () { return (0 === this.queue.length) };
    this.enqueue = function (item) { this.queue.unshift (item); };
    this.dequeue = function () { return this.queue.pop (); };
    this.forEach = function (f) { return this.queue.forEach (f); };
    this.length = function () { return this.queue.length; };
    this.toArray = function () { return this.queue; }
}

/* var q = new Queue ();
console.log (q.empty ());
q.enqueue ("item 1");
console.log (q.empty ());
var v = q.dequeue ();
console.log (v);
console.log (q.empty ()); */

exports.Queue = Queue;

