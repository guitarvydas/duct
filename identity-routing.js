implementationroute{foreveryiteminchildrenofme=>child{foreveryiteminoutputQueueofchild.runnable=>output_message{synonymmessage=output_message{findconnectioninmegivenchildXmessage.etag=>connection{lockreceiversofconnection{foreveryreceiversinconnection=>dest{synonymparams={me,message,dest}{cond{dest.component!=me{@deliver_to_child_input<=params}}{dest.component==me{@deliver_to_me_output<=params}}}}}}}}{@child.runnable.resetOutputQueue}}}syncdeliver_to_child_input<=me,receiver,message{varinput_message<={receiver.etag,message.data}{@receiver.enqueueInputMessage<=input_message}}syncdeliver_to_me_output<=me,receiver,message{varoutput_message<={receiver.etag,message.data}{@me.enqueueInputMessage<=output_message}}
