import read;
import write;

var signature = {
    name: "top",
    kind: "containerized function",
    inputs: [
	{ "input filename", ["infame"] },
	{ "output filename", ["outfame"] }
    ],
    outputs: [
    ]
};

var implementation = {
    name: "top",
    kind: "containerized function",
    handler: function (me, message) {},
    begin: function (me, infname, outfname) {
	me.send ("input filenname", infname);
	me.send ("output filenname", outfname);
	me.dispatch ();
    },
    finish: function (me) {},
}	
    
function Top (this) {
    this.signature = signature;
    this.implementation = implementation;
    var child1 = new Read (me);
    var child2 = new Write (me);
    this.children = [
	{"name": "r", "instance": child1}, 
	{"name": "w", "instance": child2}
    ],
    this.nets = [
	{"name":"⇒₁","locks":["r"]},
	{"name":"⇒₂","locks":["w"]},
	{"name":"⇒₃","locks":["r"]},
	{"name":"⇒₄","locks":["w"]}
    ],
    this.connections = [
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
    ]
}
