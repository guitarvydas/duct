exports.route = function () {
var _me = this;
var child = _me.children.forEach (child => {
var output_message = child.runnable.outputQueue.forEach (item => {
var message = output_message;
var connection = this.find_connection_in__me (child, message.port);
connection.lock ();
var dest = connection.forEach (receiver => {
var params = [_me, message, receiver];
if (dest.component !== _me) {
deliver_output_to_child_input (params);
} else if (dest.component === _me) {
deliver_output_to_me_output (params);
}
});
connection.unlock ();
});
child.runnable.resetOutputQueue ();
});
}

this.deliver_output_to_child_input = function (_me, receiver, message) {
var input_message = [receiver.etag, message.data];
receiver.enqueueInputMessage (input_message);
}

this.deliver_output_to_me_output = function (_me, receiver, message) {
var output_message = [receiver.etag, message.data];
_me.enqueueInputMessage (output_message);
}
