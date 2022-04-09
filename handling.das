implementation deliverInputMessageToAllChildrenOfSelf (message)
      { find connection from me on port message.etag
        { lock receivers of connection
          { for every receiver in connection => dest
            { synonym params = {me, message, receiver}
	      { cond
		{ dest.component != me
		  { @deliver_input_from_container_input_to_child_input <= params }
		}
		{ dest.component == me
		  { @deliver_input_from_container_input_to_me_output <= params }
		}
	      }
            }
          }
        }
      }
