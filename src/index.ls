require! <[fs LiveScript]>

engine = (code, cfg) ->
  cfg = if typeof(cfg) == \function => cfg! else cfg
  code = fs.read-file-sync \config.ngx .toString!
  code = code
    .replace(/\\/gm, "\\\\")
    .replace(/#/gm, "\\#")
    .replace(/\$/gm, "\\$")
    .replace(/!{/gm, '#{')
  vars = [[k,v] for k,v of cfg].map (d) -> """#{d.0} = #{JSON.stringify(d.1)};"""
  code = "#{vars.join(\\n)} return " + '"""\n' + code + '""";'
  ret = (LiveScript.run code)

module.exports = engine
