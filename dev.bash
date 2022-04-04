#!/bin/bash
prep=~/tools/pre/pre
cdir=`pwd`
${prep} '.' '$' dia.ohm dia.fmt --stop=1 <routing.das

