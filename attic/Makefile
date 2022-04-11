all: routing handling
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

fcIdentity:
	./identity-flowchart.bash <tryMeWithoutRouting.drakon

fct:
	./flowchart.bash <testrouting.drakon >testrouting.js

fc:
	./flowchart.bash <tryMeWithoutRouting.drakon >tryMeWithoutRouting.js

fctest:
	./flowchart.bash <testrouting.drakon >testrouting.js

tyIdentity:
	./identity-ty.bash <mp.ty
