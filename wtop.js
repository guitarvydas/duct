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
    var child1 = new top.Top (me);
    return [
        {"name": "toptop", "runnable": child1}, 
    ];
}

function makeNets (me) {
    return [
        {"name":"⇒₁","locks":["toptop"]},
        {"name":"⇒₂","locks":["toptop"]},
    ];
}

function makeConnections (me) {
    return [
        {"sender":{"name":"_me","etag":"input filename"},
         "net":"⇒₁",
         "receivers": [{"name":"toptop","etag":"filename"}]
        },                 
        {"sender":{"name":"_me","etag":"output filename"},
         "net":"⇒₂",
         "receivers": [{"name":"toptop","etag":"filename"}]
        }
    ];
}

function Top (container) {
    let me = new runnable.Container (signature, protoImplementation, container);
    me.name = "tt";
    me.children = makeChildren (container);
    me.nets = makeNets (container);
    me.connections = makeConnections (container);
    me.deliver_input_from_container_input_to_child_input = deliver.deliver_input_from_container_input_to_child_input;
    me.deliver_input_from_container_input_to_me_output = deliver.deliver_input_from_container_input_to_me_output;
    return me;
}

exports.Top = Top;
