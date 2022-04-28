let queue = require ('./queue');
let message = require ('./message');
let routing = require ('./routing');
let steprecursively = require ('./step');
let fc = require ('./find_connection');
let fcim = require ('./find_connection_in__me');

function send (etag, v, who, tracer) {
    let m = new message.OutputMessage (etag, v, who, "?", tracer); // Send knows who the sender is, but doesn't yet know who the receiver is
    this.outputQueue.enqueue (m);
}

function inject (etag, v, tracer) {
    let m = new message.InputMessageNoTrace (etag, v, ".", undefined);
    this.inputQueue.enqueue (m);
}

function Runnable (signature, protoImplementation, container, instancename) {
    if (instancename) {
	this.name = instancename;
    } else {
	this.name = signature.name;
    }
    this.signature = signature;
    this.protoImplementation = protoImplementation;
    this.container = container;
    this.inputQueue = new queue.Queue ();
    this.outputQueue = new queue.Queue ();
    this.outputs = function () { return this.outputQueue.toArray (); };
    this.send = send;
    this.inject = inject;
    this.handler = protoImplementation.handler;
    this.hasOutputs = function () {return !this.outputQueue.empty ()};
    this.hasInputs = function () {return !this.inputQueue.empty ()};
    this.has_children = function () {return (0 < this.children.length); };
    this.dequeueOutput = function () {return this.outputQueue.dequeue ();};
    this.enqueueInput = function (m) { m.target = this.name; this.inputQueue.enqueue (m); };
    this.enqueueOutput = function (m) { m.target = this.name; this.outputQueue.enqueue (m); };
    this.begin = function () {};
    this.finish = function () {};
    this.resetOutputQueue = function () {
        this.outputQueue = new queue.Queue ();
    }
    this.errorUnhandledMessage = function (message) {
	console.error (`unhandled message in ${this.name} ${message.tag}`);
	process.exit (1);
    };
    if (container) {
	this.conclude = container.conclude;
    }
    this.panic = function () { throw "panic"; }
}

function Leaf (signature, protoImplementation, container, name) {
    let me = new Runnable (signature, protoImplementation, container, name);
    me.route = function () { };
    me.children = [];
    me.connections = [];
    me.step = function () {
        if (! this.inputQueue.empty ()) {
            let m = this.inputQueue.dequeue ();
            this.handler (this, m);
        }
    };
    this._previouslyReady = false;
    me.memoPreviousReadiness = function () { this._previouslyReady = this.hasInputs (); };
    me.testPreviousReadiness = function () { return this._previouslyReady; };
    return me;
}

function Container (signature, protoImplementation, container, name) {
    let me = new Runnable (signature, protoImplementation, container, name);
    me.route = routing.route;
    me.step = function () {
        // Container tries to step all children,
        // if no child was busy, then Container looks at its own input
	// (logic written in step.drawio -> step.drakon -> step.js ; step returns
	//  a stepper function, which must be called with this)
        var stepperFunction = steprecursively.Try_component ();
        stepperFunction (this);
    },
    me.self_first_step_with_input = function () {
        if (! this.inputQueue.empty ()) {
            let m = this.inputQueue.dequeue ();
            this.handler (this, m);
	}
    },
    me.memo_readiness_of_each_child = function () {
        this.children.forEach (childobject => {
            childobject.runnable.memoPreviousReadiness ();
        });
    };
    me.any_child_was_previously_ready = function () {
        return this.children.some (childobject => {
            childobject.runnable.testPreviousReadiness ();
        });
    };
    me.step_each_child = function () {
        this.children.forEach (childobject => {
            childobject.runnable.step ();
        });
    };

    me.any_child_has_inputs = function () {
        return this.children.some (childobject => {
            childobject.runnable.hasInputs ();
        });
    }
    
    me.self_has_input = me.hasInputs;
    me.ready = me.hasInputs;
    me.busy = me.any_child_has_inputs;
    me.hasWorkToDo = function () {
	return (this.ready () || this.busy () );
    };

    me.find_connection = fc.find_connection;
    me.find_connection_in__me = function (_me, child, etag) {
	return fcim.find_connection_in__me (this, child.name, etag);
    };
    me.lookupChild = function (name) {
	var _ret = null;
	this.children.forEach (childobj => {
	    if (childobj.name === name) {
		_ret = childobj.runnable;
	    }
	});
	if (_ret === null) {
	    console.error (`child ${name} not found in ${this.name}`);
	    process.exit (1);
	};
	return _ret;
    }
    if (protoImplementation.begin) {
	    me.begin = protoImplementation.begin;
    }
    if (protoImplementation.finish) {
        me.finish = protoImplementation.finish;
    }
    me._done = false;
    me.conclude = function () { 
        this.container._done = true; 
    };
    me.done = function () {return this._done;};
    me.resetdone = function () {this._done = false;}
    me.wakeup = function () {
	if (this.container) {
	    this.route ();
	    this.container.wakeup (); // keep punting upwards until at top
	} else {
	    this.resetdone ();
	    this.step ();
	    this.route ();
	    while ( (!this.done ()) && this.hasWorkToDo () ) {
		this.step ();
		this.route ();
	    }
	}
    }

    return me;
}


exports.Leaf = Leaf;
exports.Container = Container;



