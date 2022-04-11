const msg = require ('./message');
exports.route = function () {
var _me = this;
var _ret = null;

_me.children.forEach (child => {
child.runnable.outputQueue.forEach (output_message => {
var message = output_message;
var connection = this.find_connection_in__me (this, child, message.etag);

connection.receivers.forEach (dest => {
var params = [_me, dest, message];
if ((dest.component !== _me)) {
deliver_to_child_input (params);
} else if ((dest.component === _me)) {
deliver_to_me_output (params);
}
});
});
child.runnable.resetOutputQueue ();
});
return _ret;
}

deliver_to_child_input = function ([_me, dest, message]) {
var input_message = new msg.InputMessage (dest.etag, message.data,this,message);
var receiver = _me.lookupChild (dest.component);
receiver.enqueueInput (input_message);
}

deliver_to_me_output = function ([_me, dest, message]) {
var output_message = new msg.OutputMessage (receiver.etag, message.data,this,message);
_me.enqueueOutput (output_message);
}
