require! <[fs path livescript]>

engine = (code = "", opt = {}, dir = '') ->
  cfg = if typeof(opt) == \function => opt! else opt
  code = code
    .replace(/\\/gm, "\\\\")
    .replace(/#/gm, "\\#")
    .replace(/\$/gm, "\\$")
    .replace(/!{/gm, '#{')
    .replace(/"""/gm, '\\"\\"\\"')
  include = (filename) ->
    subdir = path.dirname(path.join(dir, filename))
    engine(fs.read-file-sync(path.join(dir, filename)).toString!, opt, subdir)

  vars = ["#k = cfg.#k" for k of cfg].join(\\n)
  code = "#vars\nreturn " + '"""\n' + code + '"""'
  ret = eval livescript.compile(code)

module.exports = engine
