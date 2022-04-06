#!/bin/bash
prep=~/tools/pre/pre
cdir=`pwd`
${prep} '.' '$' flowchart.ohm flowchart.fmt --stop=1 --support=${cdir}/support.js

