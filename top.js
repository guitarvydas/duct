const eh = require('./composition');
read = require ('./read');
write = require ('./write');

var signature = {
    name: "top",
    kind: "containerized function",
    inputs: [
	{ "name": "input filename", "structure": ["infname"] },
	{ "name": "output filename", "structure": ["outfname"] }
    ],
    outputs: [
    ]
};

function begin (me, infname, outfname) {
    me.send ("input filenname", infname);
    me.send ("output filenname", outfname);
}

function finish (me) {
}

var implementation = {
    name: "top",
    kind: "containerized function",
    handler: defaultContainerHandler,
    begin: begin,
    finish: finish
}	
    
function makeChildren (me) {
    var child1 = new Read (me);
    var child2 = new Write (me);
    return [
	{"name": "r", "instance": child1}, 
	{"name": "w", "instance": child2}
    ];
}

function makeNets (me) {
    return [
	{"name":"⇒₁","locks":["r"]},
	{"name":"⇒₂","locks":["w"]},
	{"name":"⇒₃","locks":["r"]},
	{"name":"⇒₄","locks":["w"]}
    ];
}

function makeConnections (me) {
    return [
	{"sender":{"component":"$me","port":"input filename"},
	 "net":"⇒₁",
	 "receivers": [{"component":"r","port":"filename"}]
	},		   
	{"sender":{"component":"$me","port":"output filename"},
	 "net":"⇒₂",
	 "receivers": [{"component":"w","port":"filename"}]
	},		   
	{"sender":{"component":"r","port":"char"},
	 "net":"⇒₃",
	 "receivers": [{"component":"w","port":"char"}]
	},		   
	{"sender":{"component":"w","port":"request"},
	 "net":"⇒₄",
	 "receivers": [{"component":"r","port":"req"}]
	}
    ];
}

function Top () {
    this.signature = signature;
    this.implementation = implementation;
    this.makeRunnable = function (container) {
	var me = new eh.Composition ();
	me.container = container;
	me.kind = this;
	me.children = this.makeChildren ();
	me.nets = this.makeNets ();
	me.connections = this.makeConnections ();
	me.handler = eh.defaultContainerHandler;
	me.begin = this.makeBegin ();
	me.finish = this.makeFinish ();
	me.inputQueue = new Queue ();
	me.outputQueue = new Queue ();
	return me;
    }
}
