require! <[fs path]>

lib = path.dirname(fs.realpathSync __filename.replace(/\(js\)$/, ''))
root = path.join(lib, '..')

tt = require path.join(root, "src/index.ls")

template = (fs.read-file-sync "config.ngx" .toString!)
cfg = JSON.parse(fs.read-file-sync "data.json" .toString!)

ret = tt template, cfg
console.log ret
