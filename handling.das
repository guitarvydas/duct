implementation deliverInputMessageToAllChildrenOfSelf (message)
      { find connection from me on port message.etag
        { lock connection
          { for every receivers in connection => dest
            { synonym params = {me, message, dest}
	      { cond
		{ dest.component != me
		  { @me.deliver_input_from_container_input_to_child_input <= params }
		}
		{ dest.component == me
		  { @me.deliver_input_from_container_input_to_me_output <= params }
		}
	      }
            }
          }
        }
      }
