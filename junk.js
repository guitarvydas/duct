function routeChildrenOutputs () {

    var child = this.forEach (child => {
	var output_message = childoutputQueue.forEach (item => {
	    var message = output_message;
	    var connection = this.find_connection_in_this (child, message.port);
	    var dest = connection.forEach (receiver => {
		connectionwithreceiverslocked
		var params = this, message, receiver;
		if (dest.component !== this) {
		    deliver_output_to_child_input (params);
		} else if (dest.component === this) {
		    deliver_output_to_me_output (params);
		}
	    }
					  }
	    child.resetOutputQueue ();
	}
						      }

	function deliver_output_to_child_input (this, receiver, message) {
	    var input_message = {receiver.etag, message.data};
	    receiver.enqueueInputMessage (input_message);
	}

	function deliver_output_to_me_output (this, receiver, message) {
	    var output_message = {receiver.etag, message.data};
	    this.enqueueInputMessage (output_message);
	}
