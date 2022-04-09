let queue = require ('./queue');
let message = require ('./message');
let routing = require ('./routing');

function send (etag, v, tracer) {
    let m = new message.OutputMessage (etag, v, tracer);
    this.outputQueue.enqueue (m);
}

function Runnable (signature, protoImplementation, container, name) {
    this.name = name;
    this.signature = signature;
    this.protoImplementation = protoImplementation;
    this.container = container;
    this.inputQueue = new queue.Queue ();
    this.outputQueue = new queue.Queue ();
    this.send = send;
    this.handler = protoImplementation.handler;
    this.step = function () {
        if (! this.inputQueue.empty ()) {
            let m = this.inputQueue.dequeue ();
            this.handler (m);
        }
    }
    this.hasOutputs = function () {return !this.outputQueue.empty ()};
    this.dequeueOutput = function () {return this.outputQueue.dequeue ();};
    this.begin = protoImplementation.begin;
    this.finish = protoImplementation.finish;
    this.resetOutputQueue = function () {
	this.outputQueue = new queue.Queue ();
    }
}

function Leaf (signature, protoImplementation, container, name) {
    let me = new Runnable (signature, protoImplementation, container, name);
    me.conclude = container.conclude;
    me.route = function () { };
    me.children = [];
    return me;
}

function Container (signature, protoImplementation, container, name) {
    let me = new Runnable (signature, protoImplementation, container, name);
    me.conclude = container.conclude;
    me.route = routing.route;
    return me;
}


exports.Leaf = Leaf;
exports.Container = Container;
    


