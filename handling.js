exports.deliverInputMessageToAllChildrenOfSelf = function (message) {
var _me = this;
var _ret =  null;

var connection = _me.find_connection (message.etag);
connection.lock ();
connection.dest.forEach (receiver => {
var params = [_me, message, receiver];
if ((dest.component !== _me)) {
deliver_input_from_container_input_to_child_input (params);
} else if ((dest.component === _me)) {
deliver_input_from_container_input_to_me_output (params);
}
});
connection.unlock ();
return  _ret;
}
