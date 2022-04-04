all: routing
	./run-simple.bash

routing:
	./dev.bash <routing.das >/tmp/routing.js

handling:
	./dev.bash <handling.das >/tmp/handling.js

identity:
	./identity.bash
