#!/usr/bin/env node
(function(){
  var fs, path, yargs, jsYaml, livescript, tt, argv, input, output, cfgFile, requireModule, code, cfg, ret;
  fs = require('fs');
  path = require('path');
  yargs = require('yargs');
  jsYaml = require('js-yaml');
  livescript = require('livescript');
  tt = require("./index");
  argv = yargs.option('config', {
    alias: 'c',
    description: "config json/lson/yaml file used to interpolate.",
    type: 'string'
  }).option('require', {
    alias: 'r',
    description: "require module as config."
  }).option('output', {
    alias: 'o',
    description: "output file name. print to stdout if omitted",
    type: 'string'
  }).help().alias('help', 'h').check(function(argv, options){
    if (!argv._[0] || !fs.existsSync(argv._[0])) {
      throw new Error("input file missing");
    }
    if (argv.r && argv.c) {
      throw new Error("only one of require and config option could be specified.");
    }
    return true;
  }).argv;
  input = argv._[0];
  output = argv.o;
  cfgFile = argv.c;
  requireModule = argv.r;
  if (cfgFile) {
    code = fs.readFileSync(cfgFile).toString();
    if (/\.ls(on)?$/.exec(cfgFile)) {
      cfg = eval(livescript.compile(code, {
        bare: true,
        json: true,
        header: false
      }));
    } else if (/\.ya?ml$/.exec(cfgFile)) {
      cfg = jsYaml.safeLoad(code);
    } else {
      cfg = JSON.parse(code);
    }
  } else if (requireModule) {
    cfg = livescript.run("return require('" + requireModule + "')");
  } else {
    cfg = {};
  }
  ret = tt(fs.readFileSync(input).toString(), cfg, path.dirname(input));
  if (output) {
    fs.writeFileSync(output, ret);
  } else {
    console.log(ret);
  }
}).call(this);
