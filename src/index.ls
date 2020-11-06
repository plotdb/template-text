require! <[fs LiveScript]>

engine = (code = "", cfg = {}) ->
  cfg = if typeof(cfg) == \function => cfg! else cfg
  code = code
    .replace(/\\/gm, "\\\\")
    .replace(/#/gm, "\\#")
    .replace(/\$/gm, "\\$")
    .replace(/!{/gm, '#{')

  vars = ["#k = cfg.#k" for k of cfg].join(\\n)
  code = "#vars\nreturn " + '"""\n' + code + '"""'
  ret = eval LiveScript.compile(code)

module.exports = engine
