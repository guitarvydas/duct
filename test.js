// var queue = require ('./queue');
// var q = new queue.Queue ();
// console.log (q.empty ());
// q.enqueue ("item 1");
// console.log (q.empty ());
// var v = q.dequeue ();
// console.log (v);
// console.log (q.empty ());

/* var read = require ('./read');
var r = new read.Read (undefined); */
var rw = require ('./readwrapper');
var testHarness = new rw.ReadWrapper ();
testHarness.send ("filename", "test.txt");
testHarness.send ("req", true); 
