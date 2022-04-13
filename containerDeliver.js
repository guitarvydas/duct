var mssg = require ('./message');

exports.deliver_input_from_container_input_to_child_input = function (params) {
    var _me = params[0];
    var message = params[1];
    var dest = params[2];

    var destname = dest.name;
    var receiverrunnable = this.lookupChild (destname);
    
    var newm = new mssg.InputMessage (dest.etag, message.data, _me.name, receiverrunnable.name, message);
    receiverrunnable.enqueueInput (newm);
}
exports.deliver_input_from_container_input_to_me_output = function (params) {
    var _me = params[0];
    var message = params[1];
    var dest = params[2];
    
    var destname = dest.name;
    var receiverrunnable = this.lookupChild (destname);

    var newm = new mssg.OutputMessage (dest.etag, message.data, _me.name, receiverrunnable.name, message);
    receiverrunnable.enqueueOutput (newm);
}
