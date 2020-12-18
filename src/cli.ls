#!/usr/bin/env node
require! <[fs path yargs js-yaml LiveScript]>
tt = require "./index"

argv = yargs
  .option \config, do
    alias: \c
    description: "config json/lson/yaml file used to interpolate."
    type: \string
  .option \require, do
    alias: \r
    description: "require module as config."
  .option \output, do
    alias: \o
    description: "output file name. print to stdout if omitted"
    type: \string
  .help!
  .alias \help, \h
  .check (argv, options) ->
    if !argv._.0 or !fs.exists-sync(argv._.0) => throw new Error("input file missing")
    if argv.r and argv.c => throw new Error("only one of require and config option could be specified.")
    return true
  .argv

input = argv._.0
output = argv.o
cfg-file = argv.c
require-module = argv.r

if cfg-file =>
  code = fs.read-file-sync(cfg-file).toString!
  if /\.ls(on)?$/.exec(cfg-file) => cfg = eval(LiveScript.compile(code, {bare: true, json: true, header: false}))
  else if /\.ya?ml$/.exec(cfg-file) => cfg = js-yaml.safe-load code
  else cfg = JSON.parse(code)
else if require-module =>
  cfg = LiveScript.run("return require('#{require-module}')")
else cfg = {}

ret = tt(fs.read-file-sync(input).toString!, cfg, path.dirname(input))
if output => fs.write-file-sync output, ret
else console.log ret
