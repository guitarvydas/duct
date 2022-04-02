import queue;

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
	    this.tryAllComponentsOnce ();
	}
    }

    // this code could probably benefit from a cleanup...
    // it has been grown organically, and, originally written in Lisp
    // I'm trying to be very explicit about DI (Design Intent), so the code
    //  is probably more verbose than would be expected

    this.tryAllComponentsOnce = function () {
	this.tryMe ();
    }

    this.tryMe () {
	this.tryMeWithoutRouting ();
	this.routeChildrenOutputs ();
    }

    this.hasChildren = function () { return (0 < this.children.length); }

    this.anyChildProducedOutput = function () {
	// return true if any child has output queued
	// OK to check me, since me hasn't run yet and, therefore, has no output
	this.children.forall (child => { 
	    if (! child.outputQueue.empty ()) { 
		return true; 
	    }
	});
	return false;
    }

    this.tryMeWithoutRouting = function () {
	// recursively run each child, if any child produced output, don't run parent
	// reason: a Container is "busy" if any child is busy
	//  Containers are implemented as compositions of children
	//  a Component must not process another message until it has fully processed
	//    the current message
	// see Drakon diagram tryMeWithoutRouting.drawio
	// return:
	//   return true if any ouput was produced (by children or me)
	//   return false if no ouput was produced
	if (this.hasChildren ()) {
	    this.tryEachChild ();
	    if (this.anyChildProducedOutput ()) {
		return true;
	    } else {
		this.trySelf ();
		if (this.selfProducedOutput ()) {
		    return true;
		} else {
		    return false;
		}
	    }
	} else {
	    return this.trySelf ();
	}
    }

    this.tryEachChild = function () {
	// must not invoke $me
	if (! this.hasChildren ()) { 
	    // this is a Leaf
	    this.tryLeaf ();
	} else {
	    // this is a Container
	    this.children.forEach (child => {
		if (! child.isMe (this)) { // $me is listed in Children for convenience
		    child.tryComponent ();
		}
	    });
	}
    }

    this.isMe = function (other) { return other === this; }

    this.routeChildrenOutputs = function () {
	niy;
    }

    this.tryComponent = function () {
	niy;
    }
}
