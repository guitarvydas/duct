const fs = require('fs')

function write () {
    let me = new mp.Leaf ();
    me.signature = {
	kindName: 'write';
	inputPorts: ['filename', 'char'];
	outputPorts: ['request'];
    };
    me.implementation = consoleWriteHandler;
    return me;
}


function consoleWriteHandler (me, message) {
    if (message.tag === 'filename') {
	// ignore
    } else if (message.tag === 'char') {
	console.log (message.data);
    } else {
	me.unhandledMessage (message);
    }
}


// This example code implements output to the console
// but is port-for-port compatible with output to a file (aka referential transparency)

// (in a future example, we will show how to create a 'write' part that wraps, both, 
//  file and console output ; this example is extra-KISS and does only one kind of output
//  to make the example a bare minimum)

