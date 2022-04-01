const fs = require('fs')
let filename = '';
let contents = '';
let cindex = 0;

function read () {
    let me = new mp.Leaf ();
    me.signature = { 
	kindName: 'read', 
	inputPorts: ['filename'];
	outputPorts: [];
    return me;
}

    let signature = {
	kindName = 'read';
	inputPorts = ['filename', 'request'];
	outputPorts = ['char'];
    };
    let implementation = {
	handler: read_handler
    };
	
    return me;
}


function read_handler (me, message) {
    if (message.tag === 'filename') {
	filename = message.data;
	contents = fs.readFileSync (filename, 'utf8');
	cindex = 0;
    } else if (message.tag === 'request') {
	if (!eof ()) {
	    me.send ('char', nextChar ());
	}
    } else {
	me.unhandledMessage (message);
    }
}


// helper functions

function eof () {
    if (cindex > contents.length) {
	return true;
    } else {
	return false;
    }
}

function nextChar () {
    let c = contents.substr (cindex, 1);
    cindex += 1;
    return c;
}
