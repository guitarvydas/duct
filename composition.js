var queue = require('./queue');
var tryWithoutRouting = require('./tryMeWithoutRouting');
var handling = require('./handling');

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

    this.runAllComponentsOnce = function () {
	this.runComponent ();
    }

    this.runComponent = function () {
	tryMeWithoutRouting.??? (this);
	// this.routeChildrenOutputs ();
    }

    // route Container input to children (or $me's output)
    this.defaultContainerHandler = handling.deliverInputMessageToAllChildrenOfSelf;
    
}
