DIA=dia.ohm dia.fmt
IDIA=dia.ohm identity-dia.fmt
DRAKON=flowchart.ohm flowchart.fmt
IDRAKON=flowchart.ohm identity-flowchart.fmt

all: test.js
	node test

dev:
	./identity.bash <routing.das


# drawing simple.drawio -> factbase (fb.pl)
fb.pl: simple.drawio
	./run-simple.bash

find_connection.js: find_connection.das $(DIA)
	./dev.bash <find_connection.das >find_connection.js

routing.js: routing.das $(DIA) identity
	./dev.bash <routing.das >routing.js

handling.js: handling.das $(DIA) $(IDIA)
	./dev.bash <handling.das >handling.js

$(IDIA): identity.bash routing.das handling.das
	./identity.bash <routing.das
	./identity.bash <handling.das

$(IDRAKON): identity-flowchart.bash step.drakon
	./identity-flowchart.bash <step.drakon

step.js: step.drakon $(DRAKON) $(IDRAKON)
	./flowchart.bash <step.drakon >step.js

# tyIdentity:
# 	./identity-ty.bash <mp.ty

