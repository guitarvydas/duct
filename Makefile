all: routing handling
	./run-simple.bash

dev: tyIdentity

routing:
	./dev.bash <routing.das >/tmp/routing.js

handling:
	./dev.bash <handling.das >/tmp/handling.js

identity: fcIdentity
	./identity.bash <routing.das
	./identity.bash <handling.das

fcIdentity:
	./identity-flowchart.bash <tryMeWithoutRouting.drakon

fc:
	./flowchart.bash <tryMeWithoutRouting.drakon

tyIdentity:
	./identity-ty.bash <mp.ty
