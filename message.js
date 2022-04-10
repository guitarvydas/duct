function InputMessage (etag, v, tracer) {
    this.etag = etag;
    this.data = v;
    this.tracer = tracer;
    this.comefrom = this.name;
}

function OutputMessage (etag, v, tracer) {
    this.etag = etag;
    this.data = v;
    this.tracer = tracer;
    this.comefrom = this.name;
}

exports.InputMessage = InputMessage;
exports.OutputMessage = OutputMessage;

