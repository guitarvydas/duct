function InputMessage (etag, v, tracer) {
    this.etag = etag;
    this.data = v;
    this.tracer = tracer;
}

function OutputMessage (etag, v, tracer) {
    this.etag = etag;
    this.data = v;
    this.tracer = tracer;
}

exports.InputMessage = InputMessage;
exports.OutputMessage = OutputMessage;

