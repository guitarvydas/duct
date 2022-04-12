implementation route
{ for every item in children of me => child
  { for every item in outputQueue of child.runnable => output_message
    { synonym message = output_message
      { find connection in me given child X message.etag => connection
        { lock connection
	  { for every receivers in connection => dest
	      { synonym params = {me, dest, message}
		{ cond
		  { dest.name is not me
		    { @deliver_to_child_input <= params }
		  }
		  { dest.name is me
		    { @deliver_to_me_output <= params }
		  }
		}
	    }
          }
        }
	{ orelse
	   { drop message NC }
	}
    }
    {@child.runnable.resetOutputQueue}
  }
}

sync deliver_to_child_input <= me, dest, message
   // map message for receiver
  { var input_message <= $i{{dest.etag, message.data} message}
    { lookup dest.name => receiver
      { @receiver.enqueueInput <= input_message }
    }
  }

sync deliver_to_me_output <= me, dest, message
  // map message for output
  { var output_message <= $o{{receiver.etag, message.data} message}
    { @me.enqueueOutput <= output_message }
  }
