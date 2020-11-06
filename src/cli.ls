#!/usr/bin/env node
require! <[fs yargs]>
tt = require "./index"

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
  .check (argv, options) ->
    if !argv._.0 or !fs.exists-sync(argv._.0) => throw new Error("input file missing")
    return true
  .argv

input = argv._.0
output = argv.o
cfg = argv.c

ret = tt(fs.read-file-sync(input).toString!, if cfg => JSON.parse(fs.read-file-sync(cfg).toString!) else {})
if output => fs.write-file-sync output, ret
else console.log ret
