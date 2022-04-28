


function InputMessage (etag, v, who, target, tracer) {
    if (tracer === undefined) {
	throw "bad args to InputMessage";
    }
    this.etag = etag;
    this.data = v;
    this.tracer = tracer;
    this.comefrom = who;
    this.target = target;
    this.kind = "i";
    this.toString = function () { return recursiveToString (this); }
}
function InputMessageNoTrace (etag, v, who, target, tracer) {
    if (tracer !== undefined) {
	throw "bad tracer arg to InputMessage - expected undefined";
    }
    this.etag = etag;
    this.data = v;
    this.tracer = tracer;
    this.comefrom = who;
    this.target = target;
    this.kind = "i";
    this.toString = function () { return recursiveToString (this); }
}

function OutputMessage (etag, v, who, target, tracer) {
    if (tracer === undefined) {
	throw "bad args to OutputMessage";
    }
    this.etag = etag;
    this.data = v;
    this.tracer = tracer;
    this.comefrom = who;
    this.target = target;
    this.kind = "o";
    this.toString = function () { return recursiveToString (this); }
}

function OutputMessageNoTrace (etag, v, who, target, tracer) {
    if (tracer !== undefined) {
	throw "bad args to OutputMessage - expected undefined";
    }
    this.etag = etag;
    this.data = v;
    this.tracer = tracer;
    this.comefrom = who;
    this.target = target;
    this.kind = "o";
    this.toString = function () { return recursiveToString (this); }
}

exports.InputMessage = InputMessage;
exports.InputMessageNoTrace = InputMessageNoTrace;
exports.OutputMessage = OutputMessage;
exports.OutputMessageNoTrace = OutputMessageNoTrace;

function recursiveToString (m) {
    if (m) {
        return `(${m.comefrom}->${m.target}::[${m.kind}]${m.etag}:${m.data}:${recursiveToString (m.tracer)})`;
    } else {
        return '.';
    }
}
