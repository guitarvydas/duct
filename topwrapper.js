var top = require ('./top');
var message = require ('./message');

function TopWrapper (infname, outfname) {
    this.begin = function () {
	uut.begin (me, infname, outfname);
    };
    this.finish = function () {
        uut.finish ();
    };
    this.isValidETagForUUT = isValidETagForUUT;
    this.isInputETag = isInputETag;
    this.send = function (etag, v) {
        if (this.isValidETagForUUT (etag)) {
            var m = new message.OutputMessage (etag, v);
            this.uut.handler (this.uut, m);
        } else {
            console.error (`invalid input message ${message.etag}`);
        }
    };
    this._done = false;
    this.conclude = function () { 
        this.container._done = true; 
    };
    this.done = function () {return this._done;};
    this.route = function () {
        displayAllOutputsForAllChildren (this);
    };    
    this.step = function () {
        this.stepAllChildrenOnce ();
        this.route ();
    };    
    this.stepAllChildrenOnce = function () {
        this.children.forEach (child => { child.step (); });
    };
    this.uut =  new top.Top (this);
    this.children = [this.uut];
}

function isValidETagForUUT (etag) {
    if (this.isInputETag (etag)) {
        return true;
    } else {
        return false;
    }
}

function isInputETag (etag) {
    var inputs = this.uut.signature.inputs;
    return inputs.some (input => { return (etag === input.name); });
}

function displayAllOutputsForAllChildren (me) {
    me.children.forEach (child => {
        displayAllOutputs (child);
    });
}

function displayAllOutputs (child) {
    while (child.hasOutputs ()) {
        var m = child.dequeueOutput ();
        console.log (`${child.signature.name} outputs ${m.etag}:${m.data}`);
    }
}

exports.TopWrapper = TopWrapper;
