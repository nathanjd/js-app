(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<h1>\n  Hello, I am Index.\n</h1>\n<p>\n  How can I help your Starcraft play?\n</p>\n<a href=\"#!/builds\" class=\"four columns alpha splash\">\n  <h2>Build</h2>\n  <img src=\"http://placehold.it/160x120\" width=\"100%\"/>\n  <p>\n    For your enjoyment.\n  </p>\n</a>\n\n<a href=\"#!/replay\" class=\"four columns splash\">\n  <h2>Replay</h2>\n  <img src=\"http://placehold.it/160x120\" width=\"100%\"/>\n  <p>\n    For your enjoyment.\n  </p>\n</a>\n\n<a href=\"#!/analyze\" class=\"four columns splash\">\n  <h2>Analyze</h2>\n  <img src=\"http://placehold.it/160x120\" width=\"100%\"/>\n  <p>\n    For your enjoyment.\n  </p>\n</a>\n\n<a href=\"#!/practice\" class=\"four columns omega splash\">\n  <h2>Practice</h2>\n  <img src=\"http://placehold.it/160x120\" width=\"100%\"/>\n  <p>\n    For your enjoyment.\n  </p>\n</a>\n";});
templates['other'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "oth";});
})();