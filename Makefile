all: routing handling
	./run-simple.bash

dev: fci

routing:
	./dev.bash <routing.das >routing.js

handling:
	./dev.bash <handling.das >handling.js

identity: fcIdentity
	./identity.bash <routing.das
	./identity.bash <handling.das

fci:
	./identity-flowchart.bash <testrouting.drakon

fcIdentity:
	./identity-flowchart.bash <tryMeWithoutRouting.drakon

fc:
	./flowchart.bash <tryMeWithoutRouting.drakon >tryMeWithoutRouting.js

fctest:
	./flowchart.bash <testrouting.drakon >testrouting.js

tyIdentity:
	./identity-ty.bash <mp.ty
