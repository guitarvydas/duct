const handling = require('./handling');
const routing = require('./routing');
const runnable = require('./runnable');

const top = require('./top');
const read = require ('./read');
const write = require ('./write');

var signature = {
    name: "top",
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

var protoImplementation = {
    name: "top",
    kind: "container",
    handler: handling.deliverInputMessageToAllChildrenOfSelf,
    route: routing.route,
    begin: begin,
    finish: finish
}       
    
function makeChildren (me) {
    var child1 = new read.Read (me);
    var child2 = new write.Write (me);
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

function Top (container) {
    let me = new runnable.Container (signature, protoImplementation, container);
    me.children = makeChildren (container);
    me.nets = makeNets (container);
    me.connections = makeConnections (container);
    return me;
}

exports.Top = Top;
