require! <[fs path]>

lib = path.dirname(fs.realpathSync __filename.replace(/\(js\)$/, ''))
root = path.join(lib, '..')

tt = require path.join(root, "src/index.ls")

template = (fs.read-file-sync "config.ngx" .toString!)
cfg = JSON.parse(fs.read-file-sync "data.json" .toString!)

ret = tt template, cfg
console.log ret

# `!""` / `""!` must not consume the character next to it
check = (tpl, cfg, expected) ->
  ret = tt tpl, cfg
  if ret != expected => throw new Error("expected #{JSON.stringify expected}, got #{JSON.stringify ret}")
check 'a !{if x => !""root !{r}""! else ""} b', {x: true, r: \/R}, 'a root /R b'
check 'a !{if x => !""X""! else ""} b', {x: true}, 'a X b'
check 'a !{if x => !""X""! else ""} b', {x: false}, 'a  b'
check 'literal """ kept', {}, 'literal """ kept'
console.log "edge cases passed."
