define ['jquery', 'underscore', 'backbone', 'templates']
, ($, _, Backbone, templates) ->
  Backbone.View.extend
    initialize: (@router) ->
      @setElement templates.index()

    render: ->
      $('#js-app').empty().append @el

    activeNav: (page) ->
      @$('.nav a').removeClass 'active'
      @$('#' + page + '-nav').addClass 'active' if page
