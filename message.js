function InputMessage (etag, v) {
    this.etag = etag;
    this.data = v;
}

function OutputMessage (etag, v) {
    this.etag = etag;
    this.data = v;
}

exports.InputMessage = InputMessage;
exports.OutputMessage = OutputMessage;

