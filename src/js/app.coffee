require.config
  paths:
    jquery: 'lib/jquery'
    underscore: 'lib/underscore'
    backbone: 'lib/backbone'
    handlebars: 'lib/handlebars'
    S3Ajax: 'lib/S3Ajax'
    sha1: 'lib/sha1'
  shim:
    underscore:
      exports: '_'
    backbone:
      exports: 'Backbone'
    handlebars:
      exports: 'Handlebars'
  # cache busting, for development
  urlArgs: "bust=" + (new Date()).getTime()

require ['jquery', 'underscore', 'templates', 'router', 'bucket', 'S3Ajax']
, ($, _, templates, Router, bucket, S3) ->
  $ ->
    # set up s3 library
    #s3 = new S3 credentials

    router = new Router
    if !Backbone.history.fragment.length
      router.navigate 'page-one', trigger: true
    else
      router.navigate Backbone.history.fragment, trigger: true
