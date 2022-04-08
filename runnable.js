let queue = require ('./queue');
let message = require ('./message');

function send (etag, v) {
    let m = new message.OutputMessage (etag, v);
    this.outputQueue.enqueue (m);
}

function Runnable (signature, protoImplementation, container) {
    this.signature = signature;
    this.protoImplementation = protoImplementation;
    this.container = container;
    this.inputQueue = new queue.Queue ();
    this.outputQueue = new queue.Queue ();
    this.send = send;
    this.handler = protoImplementation.handler;
    this.step = undefined;
    this.hasOutputs = function () {return !this.outputQueue.empty ()};
    this.dequeueOutput = function () {return this.outputQueue.dequeue ();};
}

function Leaf (signature, protoImplementation, container) {
    let me = new Runnable (signature, protoImplementation, container);
    me.conclude = container.conclude;
    me.step = function () {
        if (! this.inputQueue.empty ()) {
            let m = this.inputQueue.dequeue ();
            this.handler (m);
        }
    }
    return me;
}


exports.Leaf = Leaf;
    


