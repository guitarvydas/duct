this.routeChildrenOutputs = function () {
    var _me = this;
    var child = _me.forEach (child => {
	var output_message = childoutputQueue.forEach (item => {
	    var message = output_message;
	    var connection = this.find_connection_in__me (child, message.port);
	    var dest = connection.forEach (receiver => {
		this.connection.receivers_locked ();
		var params = [_me, message, receiver];
		if (dest.component !== _me) {
		    this.deliver_output_to_child_input (params);
		} else if (dest.component === _me) {
		    this.deliver_output_to_me_output (params);
		}
	    });
	});
	this.child.resetOutputQueue ();
    });
}

this.deliver_output_to_child_input = function (_me, receiver, message) {
    var input_message = [receiver.etag, message.data];
    this.receiver.enqueueInputMessage (input_message);
}

this.deliver_output_to_me_output = function (_me, receiver, message) {
    var output_message = [receiver.etag, message.data];
    this.this.enqueueInputMessage (output_message);
}
