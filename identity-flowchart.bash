#!/bin/bash
prep=~/tools/pre/pre
cdir=`pwd`
${prep} '.' '$' flowchart.ohm identity-flowchart.fmt --stop=1

