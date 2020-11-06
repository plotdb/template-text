ret = do
  ip: \127.0.0.1
  dynamic-port: true
  get-port: -> Math.round(8975 * Math.random!) + 1024
  port: \8901
  hostname: \servlet.v2
  cert:
    crt: \/Path/To/My/Cert/server.crt
    key: \/Path/To/My/Cert/server.key
  root: \/Path/To/My/Server/Root/

module.exports = ret
