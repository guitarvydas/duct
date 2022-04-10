const runnable = require('./runnable');
const fs = require('fs');

var signature = {
    name: "read",
    inputs: [
        { "name": "filename", "structure": ["filename"] },
        { "name":"req", "structure":["req"] }
    ],
    outputs: [
        { "name": "char", "structure": ["char"] }
    ]
};

let protoImplementation = {
    name: "read",
    kind: "leaf",
    handler: function (me, message) {
        if ("filename" === message.etag) {
            me.filename = message.data;
            me.contents = fs.readFileSync (me.filename, 'utf8');
            me.cindex = 0;
        } else if ("req" === message.etag) {
            if (eof (me)) {
                me.conclude ();
            } else {
                me.send ("char", nextChar (me), me.name, message);
            }
        } else {
            me.errorUnhandledMessage (message);
        }
    },
    begin: function () {},
    finish: function () {}
}

function Read (container) {
    let me = new runnable.Leaf (signature, protoImplementation, container, "read");
    me.name = "r";
    me.filename = null;
    me.contents = null;
    me.index = null;
    return me;
}

exports.Read = Read;

// helper functions

function eof (me) {
    if (me.cindex > (me.contents.length - 1)) {
        return true;
    } else {
        return false;
    }
}

function nextChar (me) {
    let c = me.contents.substr (me.cindex, 1);
    me.cindex += 1;
    return c;
}
