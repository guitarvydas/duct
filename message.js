function InputMessage (etag, v, who, tracer) {
    this.etag = etag;
    this.data = v;
    this.tracer = tracer;
    this.comefrom = who;
    this.kind = "i";
}

function OutputMessage (etag, v, who, tracer) {
    this.etag = etag;
    this.data = v;
    this.tracer = tracer;
    this.comefrom = who;
    this.kind = "o";
}

exports.InputMessage = InputMessage;
exports.OutputMessage = OutputMessage;

