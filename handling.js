const msg = require ('./message');
exports.deliverInputMessageToAllChildrenOfSelf = function (_me, message) {
var _ret =  null;

var connection = _me.find_connection (_me, message.etag);

connection.receivers.forEach (dest => {
var params = [_me, message, dest];
if ((dest.component !== _me)) {
_me.deliver_input_from_container_input_to_child_input (params);
} else if ((dest.component === _me)) {
_me.deliver_input_from_container_input_to_me_output (params);
}
});
return  _ret;
}
