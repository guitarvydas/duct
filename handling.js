exports.deliverInputMessageToAllChildrenOfSelf = function () {
var _me = this;
if (_me.inputQueue.length > 0) {
var input_message = _me.inputQueue.dequeue ();
var message = input_message;
var connection = _me.find_connection (message.port);
connection.lock ();
var dest = connection.forEach (receiver => {
var params = [_me, message, receiver];
if (dest.component !== _me) {
this.deliver_input_from_container_input_to_child_input (params);
} else if (dest.component === _me) {
this.deliver_input_from_container_input_to_me_output (params);
}
});
connection.unlock ();
};
}
