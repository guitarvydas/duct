all: routing handling step drawingFactbase

drawingFactbase:
	./run-simple.bash

dev: fcIdentity fc

devXX: fcit fct

routing:
	./dev.bash <routing.das >routing.js

handling:
	./dev.bash <handling.das >handling.js

identity: fcIdentity
	./identity.bash <routing.das
	./identity.bash <handling.das

fcit:
	./identity-flowchart.bash <testrouting.drakon

stepIdentity:
	./identity-flowchart.bash <step.drakon

fct:
	./flowchart.bash <testrouting.drakon >testrouting.js

step:
	./flowchart.bash <step.drakon >step.js

fctest:
	./flowchart.bash <testrouting.drakon >testrouting.js

tyIdentity:
	./identity-ty.bash <mp.ty
