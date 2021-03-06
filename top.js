const handling = require('./handling');
const deliver = require('./containerDeliver');
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
        { "name": "char", "structure": ["char"] }
    ]
};

function begin (me, infname, outfname) {
    me.inject ("input filename", infname);
    me.inject ("output filename", outfname);
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
        {"name":"⇒₄","locks":["w"]},
        {"name":"⇒₅","locks":[]}
    ];
}

function makeConnections (me) {
    return [
        {"sender":{"name":"_me","etag":"input filename"},
         "net":"⇒₁",
         "receivers": [{"name":"r","etag":"filename"}]
        },                 
        {"sender":{"name":"_me","etag":"output filename"},
         "net":"⇒₂",
         "receivers": [{"name":"w","etag":"filename"}]
        },                 
        {"sender":{"name":"r","etag":"char"},
         "net":"⇒₃",
         "receivers": [{"name":"w","etag":"char"}]
        },                 
        {"sender":{"name":"w","etag":"request"},
         "net":"⇒₄",
         "receivers": [{"name":"r","etag":"req"}]
        },
        {"sender":{"name":"w","etag":"char"},
         "net":"⇒₅",
         "receivers": [{"name":"_me","etag":"char"}]
        }
    ];
}

function Top (container) {
    let me = new runnable.Container (signature, protoImplementation, container);
    me.name = "T";
    me.children = makeChildren (container);
    me.nets = makeNets (container);
    me.connections = makeConnections (container);
    me.deliver_input_from_container_input_to_child_input = deliver.deliver_input_from_container_input_to_child_input;
    me.deliver_input_from_container_input_to_me_output = deliver.deliver_input_from_container_input_to_me_output;
    return me;
}

exports.Top = Top;
