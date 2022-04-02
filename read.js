const eh = require('composition');
const fs = require('fs');

var signature = {
    name: "read",
    kind: "leaf",
    inputs: [
	{ "filename", ["filename"] },
	{ "req", ["req"] }
    ],
    outputs: [
	{ "char", ["char"] }
    ]
};

var implementation = {
    name: "read",
    kind: "leaf",
    handler: function (me, message) {
	if ("filename" === message.tag) {
	    me.filename = message.data;
	    me.contents = fs.readFileSync (me.filename, 'utf8');
	    me.cindex = 0;
	} else if ("req" === message.tag) {
	    if (me.eof ()) {
		me.conclude ();
	    } else {
		me.send ("char", me.nextChar ());
	    }
	} else {
	    me.errorUnhandledMessage (message);
	}
    }
}

function Read () {
    this.signature = signature;
    this.implementation = implementation;
    this.filename = null;
    this.contents = null;
    this.index = null;
    this.makeRunnable = function (container) {
	let runnable = new eh.Composition (this, container);
	return runnable;
    }
}


// helper functions

function eof (me) {
    if (me.cindex > me/contents.length) {
	return true;
    } else {
	return false;
    }
}

function nextChar (me) {
    let c = me.contents.substr (cindex, 1);
    me.cindex += 1;
    return c;
}
