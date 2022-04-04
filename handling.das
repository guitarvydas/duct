implementation deliverInputMessageToAllChildrenOfSelf
{ when messages
  { fetch => input_message
    { synonym message = input_message
      { find connection from me on port message.port
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
    }
  }
}
