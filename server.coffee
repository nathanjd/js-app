fileServer = new (require 'node-static').Server('./compiled')
http = require 'http'

server = http.createServer (request, response) ->
  request.addListener('end', ->
    fileServer.serve(request, response)
  ).resume()

server.listen 9090