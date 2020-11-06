#!/usr/bin/env node
require! <[fs yargs]>
require! <[./index]>

argv = yargs
  .option \config, do
    alias: \c
    description: "config json file used to interpolate."
    type: \string
  .option \output, do
    alias: \o
    description: "output file name. print to stdout if omitted"
    type: \string
  .help!
  .alias \help, \h
  .argv

input = argv._.0
output = argv.o
cfg = argv.c

ret = main(input, JSON.parse(fs.read-file-sync(cfg).toString!))
if output => fs.write-file-sync output, ret
else console.log ret
