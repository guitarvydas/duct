var top = require ('./top');
var message = require ('./message');

function TopWrapper (infname, outfname) {
    this.name = "tw";
    this.tracing = false;

    this.begin = function (infname, outfname) {
        this.uut.begin (this.uut, infname, outfname);
    };
    this.finish = function () {
        this.uut.finish (this.uut);
	console.log ();
	displayOutputLengths (this);
    };
    this.isValidETagForUUT = isValidETagForUUT;
    this.isInputETag = isInputETag;
    this.send = function (etag, v) {
        if (this.isValidETagForUUT (etag)) {
            var m = new message.OutputMessageNoTrace (etag, v, this.name, undefined);
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
    this.step = function () {
        this.uut.step ();
        if (this.tracing) {
            recursiveTraceOutput (this.uut);
        }
        this.route ();
    };    
    this.uut =  new top.Top (this);
    this.handler = this.step;
    this.children = [{name: "uut", runnable: this.uut}];
    this.route = function () {
        this.uut.route ();
        destructivelyDisplayAllOutputsForAllChildren (this);
    }
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
	console.log ();
        var r = child.runnable;
        displayAllOutputs (r);
        r.resetOutputQueue ();
    });
}

function displayOutputLengths (me) {
    me.children.forEach (child => {
        var r = child.runnable;
	console.log (`child ${r.name} output length=${r.outputQueue.length ()}`);
    });
}

function displayAllOutputsForAllChildren (me) {
    me.children.forEach (child => {
        displayAllOutputs (child.runnable);
    });
}

function displayAllOutputs (runnablechild) {
    runnablechild.outputQueue.forEach (m => {
	var name = runnablechild.name;
        console.log (`${name} outputs ${recursiveDisplay (m)}`);
    })
}

function recursiveDisplay (m) {
    if (m) {
        return `(${m.comefrom}->${m.target}::[${m.kind}]${m.etag}:${m.data}:${recursiveDisplay (m.tracer)})`;
    } else {
        return '.';
    }
}

function recursivelyDisplayAllOutputsForAllChildren (me) {
    recursiveTraceOutput (me.uut);
}

function recursiveTraceOutput (me) {
    displayAllOutputsForAllChildren (me);
    me.children.forEach (childobject => {
        recursiveTraceOutput (childobject.runnable);
    });
}

exports.TopWrapper = TopWrapper;
