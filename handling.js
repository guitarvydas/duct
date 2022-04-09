exports.deliverInputMessageToAllChildrenOfSelf = function (message) {
var _me = this;
var connection = _me.find_connection (message.etag);
connection.lock ();
var dest = connection.forEach (receiver => {
var params = [_me, message, receiver];
if (dest.component !== _me) {
deliver_input_from_container_input_to_child_input (params);
} else if (dest.component === _me) {
deliver_input_from_container_input_to_me_output (params);
}
});
connection.unlock ();
}
