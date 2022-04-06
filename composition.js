var queue = require('./queue');

function Composition (kind, container) {
    this.kind = null;
    this.container = null;

    this.run = function (kind, container) {
	let instance = this.makeRunnable ();
	instance.inputQueue = new Queue ();
	instance.outputQueue = new Queue ();
	instance.container = container;
	instance.kind = kind;
	instance.begin ();
	instance.dispatch ();
	return instance.finish ();
    }

    // defined by subclass
    // this.begin ();
    // this.finish ();

    this.done = false;
    this.conclude = function () { this.done = true; }

    this.dispatch = function () {
	while (!this.done) {
	    this.runAllComponentsOnce ();
	}
    }

    // this code could probably benefit from a cleanup...
    // it has been grown organically, and, originally written in Lisp
    // I'm trying to be very explicit about DI (Design Intent), so the code
    //  is probably more verbose than would be expected

    this.runAllComponentsOnce = function () {
	this.runComponent ();
    }

    this.runComponent = function () {
	this.runComponentWithoutRouting ();
	this.routeChildrenOutputs ();
    }

    this.hasChildren = function () { return (0 < this.children.length); }

    this.anyChildProducedOutput = function () {
	// return true if any child has output queued
	// OK to check $me, since me hasn't run yet and, therefore, has no output
	this.children.forall (child => { 
	    if (! child.outputQueue.empty ()) { 
		return true; 
	    }
	});
	return false;
    }

    this.runComponentWithoutRouting = function () {
	// recursively run each child, if any child produced output, don't run parent
	// reason: a Container is "busy" if any child is busy
	//  Containers are implemented as compositions of children
	//  a Component must not process another message until it has fully processed
	//    the current message
	// see Drakon diagram tryComponentWithoutRouting.drawio
	// return:
	//   return true if any ouput was produced (by children or me)
	//   return false if no ouput was produced
	if (this.hasChildren ()) {
	    this.runEachChild ();
	    if (this.anyChildProducedOutput ()) {
		return true;
	    } else {
		this.runSelf ();
		if (this.selfProducedOutput ()) {
		    return true;
		} else {
		    return false;
		}
	    }
	} else {
	    return this.runSelf ();
	}
    }

    this.runEachChild = function () {
	// must not invoke $me
	if (! this.hasChildren ()) { 
	    // this is a Leaf
	    this.runLeaf ();
	} else {
	    // this is a Container
	    this.children.forEach (child => {
		if (! child.isMe (this)) { // $me is listed in Children for convenience
		    child.runComponent ();
		}
	    });
	}
    }

    this.isMe = function (other) { return other === this; }

    this.runSelf = function () {
	if (this.isLeaf ()) {
	    this.runLeaf();
	} else {
	    this.runContainer ();
	}
    }

    this.runLeaf = function () {
	if (this.hasInputMessages ()) {
	    let message = this.dequeueInput ();
	    this.handler (message);
	}
    }

    this.runContainer = function () {
	if (this.hasInputMessages ()) {
	    let message = this.dequeueInput ();
	    this.containerDeliverInputMessageToAllChildrenOrSelf (message);
	}
    }
    
    
    
    // route Container input to children (or $me's output)
    this.containerDeliverInputMessageToAllChildrenOrSelf = function (message) {
	let connection = this.findConnectionFromSelfInput (message.etag);
	connection.lockReceivers ();
	connection.receivers.forEach (destination => {
	    if (destination.component === this) {
		this.deliverInputToOwnOutput (message, destination.port);
	    } else {
		this.deliverInputToInputOfChild (message, destination.port);
	    }
	});
	connection.unlockReceivers ();
    }

    this.deliverInputToOwnOutput = function (message, ouputPort) {
	niy;
    }

    this.deliverInputToInputOfChild = function (message, inputPort) {
	niy;
    }

/// Routing outputs from children (and $me)
    this.routeChildrenOutputs = function () {
	niy;
    }

    // helpers
    this.findConnectionFromSelfInput = function (etag) {
	niy ();
    }
    
}
