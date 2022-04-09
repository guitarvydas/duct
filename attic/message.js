function InputMessage (etag, v, sender, tracer) {
    this.etag = etag;
    this.data = v;
    this.tracer = tracer;
    this.comefrom = sender.name;
}

function OutputMessage (etag, v, sender, tracer) {
    this.etag = etag;
    this.data = v;
    this.tracer = tracer;
    this.comefrom = sender.name;
}

exports.InputMessage = InputMessage;
exports.OutputMessage = OutputMessage;

