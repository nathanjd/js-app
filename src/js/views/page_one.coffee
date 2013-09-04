define ['jquery', 'underscore', 'backbone', 'templates']
, ($, _, Backbone, templates) ->
  Backbone.View.extend
    initialize: (@router) ->
      @setElement templates.page_one()

    render: ->
      $('#content').empty().append @el
