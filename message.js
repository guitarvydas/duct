function InputMessage (etag, v, who, tracer) {
    if (tracer === undefined) {
	throw "bad args to InputMessage";
    }
    this.etag = etag;
    this.data = v;
    this.tracer = tracer;
    this.comefrom = who;
    this.kind = "i";
}
function InputMessageNoTrace (etag, v, who, tracer) {
    if (tracer !== undefined) {
	throw "bad tracer arg to InputMessage - expected undefined";
    }
    this.etag = etag;
    this.data = v;
    this.tracer = tracer;
    this.comefrom = who;
    this.kind = "i";
}

function OutputMessage (etag, v, who, tracer) {
    if (tracer === undefined) {
	throw "bad args to OutputMessage";
    }
    this.etag = etag;
    this.data = v;
    this.tracer = tracer;
    this.comefrom = who;
    this.kind = "o";
}

function OutputMessageNoTrace (etag, v, who, tracer) {
    if (tracer !== undefined) {
	throw "bad args to OutputMessage - expected undefined";
    }
    this.etag = etag;
    this.data = v;
    this.tracer = tracer;
    this.comefrom = who;
    this.kind = "o";
}

exports.InputMessage = InputMessage;
exports.InputMessageNoTrace = InputMessageNoTrace;
exports.OutputMessage = OutputMessage;
exports.OutputMessageNoTrace = OutputMessageNoTrace;
