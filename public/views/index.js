var debug = true;

(function ($) {
  var IndexView = Backbone.View.extend({
    template: Handlebars.templates['index'],

    model: {
      toJSON:function () {
        return {};
      }
    },

    initialize:function () {
      if (debug) console.log('IndexView.initialize', arguments, this.el);

      this.render();
    },

    render:function () {
      if (debug) console.log('IndexView.render', arguments, this.model.toJSON(), this.template({}));

      this.$el.html(this.template(this.model.toJSON()));

      return this;
    }
  });

  $(function () {
    var indexView = new IndexView({el: $('.container')});
  });
})(jQuery);