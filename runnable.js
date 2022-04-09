let queue = require ('./queue');
let message = require ('./message');
let routing = require ('./routing');
let steprecursively = require ('./step');

function send (etag, v, tracer) {
    let m = new message.OutputMessage (etag, v, tracer);
    this.outputQueue.enqueue (m);
}

function inject (etag, v, tracer) {
    let m = new message.InputMessage (etag, v, tracer);
    this.inputQueue.enqueue (m);
}

function Runnable (signature, protoImplementation, container, name) {
    this.name = name;
    this.signature = signature;
    this.protoImplementation = protoImplementation;
    this.container = container;
    this.inputQueue = new queue.Queue ();
    this.outputQueue = new queue.Queue ();
    this.send = send;
    this.inject = inject;
    this.handler = protoImplementation.handler;
    this.hasOutputs = function () {return !this.outputQueue.empty ()};
    this.has_children = function () {return (0 < this.children.length); };
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
    me.step = function () {
        // Leaf has no children, so it always looks at it own input
        if (! me.inputQueue.empty ()) {
            let m = me.inputQueue.dequeue ();
            me.handler (m);
            return m.hasOutputs ();
        } else {
            return false;
        }
    }
    return me;
}

function Container (signature, protoImplementation, container, name) {
    let me = new Runnable (signature, protoImplementation, container, name);
    me.conclude = container.conclude;
    me.route = routing.route;
    me.step = function () {
        // Container tries to step all children,
        // if no child was busy, then Container looks at its own input
        var workFunction = steprecursively.Try_component ();
        var workPerformed = workFunction ();
        if ((! workPerformed) && (! me.inputQueue.empty ())) {
            let m = me.inputQueue.dequeue ();
            me.handler (m);
            return me.hasOutputs ();
        } else {
            return false;
        }
    }
    return me;
}


exports.Leaf = Leaf;
exports.Container = Container;
    


