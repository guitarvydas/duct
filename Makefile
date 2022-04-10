DIA=dia.ohm dia.fmt
DRAKON=flowchart.ohm flowchart.fmt

all: test.js
	node test

test.js: routing.js handling.js step.js fb.pl find_connection.js

# drawing simple.drawio -> factbase (fb.pl)
fb.pl: simple.drawio
	./run-simple.bash

dev: find_connection

find_connection.js: find_connection.das
	./dev.bash <find_connection.das >find_connection.js

devXX: fcit fct

routing.js: routing.das $(DIA)
	./dev.bash <routing.das >routing.js

handling.js: handling.das $(DIA)
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

step.js: step.drakon $(DRAKON)
	./flowchart.bash <step.drakon >step.js

fctest:
	./flowchart.bash <testrouting.drakon >testrouting.js

tyIdentity:
	./identity-ty.bash <mp.ty

