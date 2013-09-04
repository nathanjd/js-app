require.config
  paths:
    jquery: 'lib/jquery'
    underscore: 'lib/underscore'
    handlebars: 'lib/handlebars'
    S3Ajax: 'lib/S3Ajax'
    sha1: 'lib/sha1'
    mocha: 'lib/mocha'
    chai: 'lib/chai'
  shim:
    underscore:
      exports: '_'
    handlebars:
      exports: 'Handlebars'
  # cache busting, for development
  urlArgs: "bust=" + (new Date()).getTime()

# start tests once DOM and scripts are ready
require ['jquery', 'mocha'], ($) ->
  $ ->
    mocha.setup 'bdd'
    mocha.checkLeaks()

    require [
      'spec/test'
    ], -> mocha.run()
