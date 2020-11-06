require! <[fs]>
tt = require "../src/index"

config = JSON.parse(fs.read-file-sync "config.json" .toString!)
ret = tt (fs.read-file-sync \config.ngx .toString!), config
console.log ret
