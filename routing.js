exports.route = function () {
var _me = this;
var _ret = null;

_me.children.forEach (child => {
child.runnable.outputQueue.forEach (output_message => {
var message = output_message;
var connection = this.find_connection_in__me (child, message.port);

connection.receiver.forEach (dest => {
var params = [_me, message, receiver];
if ((dest.component !== _me)) {
deliver_output_to_child_input (params);
} else if ((dest.component === _me)) {
deliver_output_to_me_output (params);
}
});
});
child.runnable.resetOutputQueue ();
});
return _ret;
}

this.deliver_output_to_child_input = function (_me, receiver, message) {
var input_message = [receiver.etag, message.data];
receiver.enqueueInputMessage (input_message);
}

this.deliver_output_to_me_output = function (_me, receiver, message) {
var output_message = [receiver.etag, message.data];
_me.enqueueInputMessage (output_message);
}
