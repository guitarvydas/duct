implementation route
{ for every item in children of me => child
  { for every item in outputQueue of child.runnable => output_message
    { synonym message = output_message
      { find connection in me given message.etag => connection
        { lock receivers of connection
	  { for every receiver in connection => dest
	      { synonym params = {me, message, receiver}
		{ cond
		  { dest.component != me
		    { @deliver_output_to_child_input <= params }
		  }
		  { dest.component == me
		    { @deliver_output_to_me_output <= params }
		  }
		}
	    }
          }
        }
      }
    }
    {@child.runnable.resetOutputQueue}
  }
}

sync deliver_output_to_child_input <= me, receiver, message
   // map message for receiver
  { var input_message <= {receiver.etag, message.data}
    { @receiver.enqueueInputMessage <= input_message } 
  }

sync deliver_output_to_me_output <= me, receiver, message
  // map message for output
  { var output_message <= {receiver.etag, message.data}
    { @me.enqueueInputMessage <= output_message }
  }
