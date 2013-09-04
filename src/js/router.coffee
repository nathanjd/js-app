define [
  'jquery', 'underscore', 'backbone',
  'views/index', 'views/page_one', 'views/page_two'
]
, (
  $, _, Backbone, IndexView, PageOneView, PageTwoView
) ->
  Backbone.Router.extend
    routes:
      'page-one': 'pageOne'
      'page-two': 'pageTwo'

    initialize: () ->
      Backbone.history.start()

    pageOne: ->
      index = new IndexView @
      index.activeNav 'page-one'
      index.render()
      pageOne = new PageOneView @
      pageOne.render()

    pageTwo: ->
      index = new IndexView @
      index.activeNav 'page-two'
      index.render()
      pageTwo = new PageTwoView @
      pageTwo.render()

