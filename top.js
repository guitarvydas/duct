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
    me.inject ("input filenname", infname, this);
    me.inject ("output filenname", outfname, this);
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
        {"name": "r", "runnable": child1}, 
        {"name": "w", "runnable": child2}
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
        {"sender":{"component":"$me","etag":"input filename"},
         "net":"⇒₁",
         "receivers": [{"component":"r","etag":"filename"}]
        },                 
        {"sender":{"component":"$me","etag":"output filename"},
         "net":"⇒₂",
         "receivers": [{"component":"w","etag":"filename"}]
        },                 
        {"sender":{"component":"r","etag":"char"},
         "net":"⇒₃",
         "receivers": [{"component":"w","etag":"char"}]
        },                 
        {"sender":{"component":"w","etag":"request"},
         "net":"⇒₄",
         "receivers": [{"component":"r","etag":"req"}]
        }
    ];
}

function Top (container) {
    let me = new runnable.Container (signature, protoImplementation, container);
    me.name = "T";
    me.children = makeChildren (container);
    me.nets = makeNets (container);
    me.connections = makeConnections (container);
    return me;
}

exports.Top = Top;
