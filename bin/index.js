// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = fs.readFileSync('config.ngx').toString();
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = fs.readFileSync('config.ngx').toString();
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = fs.readFileSync('config.ngx').toString();
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = fs.readFileSync('config.ngx').toString();
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  ret = LiveScript.run(code);
  return console.log(">", code, ret);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  ret = LiveScript.run(code);
  return console.log(">", code, ret);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  ret = LiveScript.run(code);
  return console.log(">", code, ret);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var k, v, vars, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  for (k in cfg) {
    v = cfg[k];
    console.log(k, v);
  }
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var results$ = [];
    for (k in cfg) {
      results$.push(k + " = config." + k);
    }
    return results$;
  }()).join('\n');
  code = (vars + "\nreturn ") + '"""\n' + code + '"""';
  return ret = eval(LiveScript.compile(code));
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var results$ = [];
    for (k in cfg) {
      results$.push(k + " = config." + k);
    }
    return results$;
  }()).join('\n');
  code = (vars + "\nreturn ") + '"""\n' + code + '"""';
  return ret = eval(LiveScript.compile(code));
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var results$ = [];
    for (k in cfg) {
      results$.push(k + " = cfg." + k);
    }
    return results$;
  }()).join('\n');
  code = (vars + "\nreturn ") + '"""\n' + code + '"""';
  return ret = eval(LiveScript.compile(code));
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var results$ = [];
    for (k in cfg) {
      results$.push(k + " = cfg." + k);
    }
    return results$;
  }()).join('\n');
  code = (vars + "\nreturn ") + '"""\n' + code + '"""';
  return ret = eval(LiveScript.compile(code));
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var results$ = [];
    for (k in cfg) {
      results$.push(k + " = cfg." + k);
    }
    return results$;
  }()).join('\n');
  code = (vars + "\nreturn ") + '"""\n' + code + '"""';
  return ret = eval(LiveScript.compile(code));
};
module.exports = engine;
