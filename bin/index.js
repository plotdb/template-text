(function(){
  var fs, path, livescript, engine;
  fs = require('fs');
  path = require('path');
  livescript = require('livescript');
  engine = function(code, opt, dir){
    var cfg, include, vars, k, ret;
    code == null && (code = "");
    opt == null && (opt = {});
    dir == null && (dir = '');
    cfg = typeof opt === 'function' ? opt() : opt;
    code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{').replace(/"""/gm, '\\"\\"\\"');
    include = function(filename){
      var subdir;
      subdir = path.dirname(path.join(dir, filename));
      return engine(fs.readFileSync(path.join(dir, filename)).toString(), opt, subdir);
    };
    vars = (function(){
      var results$ = [];
      for (k in cfg) {
        results$.push(k + " = cfg." + k);
      }
      return results$;
    }()).join('\n');
    code = (vars + "\nreturn ") + '"""\n' + code + '"""';
    return ret = eval(livescript.compile(code));
  };
  module.exports = engine;
}).call(this);
