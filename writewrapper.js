var write = require ('./write');
var message = require ('./message');

function WriteWrapper () {
    this.name = "ww";
    this.begin = function () {
        // this.args = ???
        uut.begin ();
    };
    this.finish = function () {
        uut.finish ();
    };
    this.isValidETagForUUT = isValidETagForUUT;
    this.isInputETag = isInputETag;
    this.send = function (etag, v) {
        if (this.isValidETagForUUT (etag)) {
            var m = new message.OutputMessage (etag, v, this);
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
        destructivelyDisplayAllOutputsForAllChildren (this);
    };    
    this.step = function () {
        this.stepAllChildrenOnce ();
        this.route ();
    };    
    this.stepAllChildrenOnce = function () {
        this.children.forEach (child => { child.step (); });
    };
    this.uut =  new write.Write (this);
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

function destructivelyDisplayAllOutputsForAllChildren (me) {
    me.children.forEach (child => {
        displayAllOutputs (child);
	child.resetOutputQueue ();
    });
}

function displayAllOutputs (child) {
    child.outputQueue.forEach (m => {
        console.log (`${child.signature.name} outputs ${m.etag}:${m.data}:${recursiveDisplay (m.tracer)}`);
    })
}

function recursiveDisplay (m) {
    if (m) {
        return `(${m.etag}:${m.data}:${recursiveDisplay (m.tracer)})`;
    } else {
	return '.';
    }
}

exports.WriteWrapper = WriteWrapper;
