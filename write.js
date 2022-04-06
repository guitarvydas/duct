const eh = require('./composition');

var signature = {
    name: "write",
    kind: "leaf",
    inputs: [
	{ "name": "filename", "structure": ["filename"] },
	{ "name": "char", "structure": ["char"] }
    ],
    outputs: [
	{ "name": "request", "structure": ["request"] }
    ]
};

var implementation = {
    name: "write",
    kind: "leaf",
    handler: function (me, message) {
	if ("filename" === message.tag) {
	    me.send ("request", true);
	} else if ("char" === message.tag) {
	    console.log (me.message.data);
	    me.send ("request", true);
	} else {
	    me.errorUnhandledMessage (message);
	}
    }
}

function Write () {
    this.signature = signature;
    this.implementation = implementation;
    this.makeRunnable = function (container) {
	var runnable = new eh.Composition (this, container);
	return runnable;
    }
}


// This example code implements output to the console
// but is port-for-port compatible with output to a file (aka referential transparency)

// (in a future example, we will show how to create a 'write' part that wraps, both, 
//  file and console output ; this example is extra-KISS and does only one kind of output
//  to make the example a bare minimum)

