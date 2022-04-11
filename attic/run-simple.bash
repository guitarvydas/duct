#!/bin/bash
# usage: run-simple.bash

# tools root - takes the place of $PATH
# change this for your own environment
root=`realpath ~/projects/das/`

infile=simple.drawio

${root}/d2f/d2f.bash ${root} ${infile} >fb.pl

