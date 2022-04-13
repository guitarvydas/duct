const runnable = require('./runnable');

var signature = {
    name: "write",
    inputs: [
        { "name": "filename", "structure": ["filename"] },
        { "name": "char", "structure": ["char"] }
    ],
    outputs: [
        { "name": "request", "structure": ["request"] },
        { "char": "request", "structure": ["char"] }
    ]
};

var protoImplementation = {
    name: "write",
    kind: "leaf",
    handler: function (me, message) {
        if ("filename" === message.etag) {
            me.send ("request", true, me.name, message);
        } else if ("char" === message.etag) {
            process.stdout.write (message.data);
            me.send ("char", message.data, me.name, message);
            me.send ("request", true, me.name, message);
        } else {
            me.errorUnhandledMessage (message);
        }
    }
}

function Write (container) {
    let me = new runnable.Leaf (signature, protoImplementation, container);
    me.name = "w";
    me.filename = null;
    return me;
}

exports.Write = Write;

// This example code implements output to the console
// but is port-for-port compatible with output to a file (aka referential transparency)

// (in a future example, we will show how to create a 'write' part that wraps, both, 
//  file and console output ; this example is extra-KISS and does only one kind of output
//  to make the example a bare minimum)

