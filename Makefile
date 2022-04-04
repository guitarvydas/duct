all: routing handling
	./run-simple.bash

routing:
	./dev.bash <routing.das >/tmp/routing.js

handling:
	./dev.bash <handling.das >/tmp/handling.js

identity:
	./identity.bash <routing.das
	./identity.bash <handling.das

dev:
	./identity-flowchart.bash <tryMeWithoutRouting.drakon
