(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['nameSearch'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"listOption-navbar-search\">\r\n  <input type=\"text\" id=\"navbar-search-input\" placeholder=\"Search for name...\">\r\n  <button type=\"button\" id=\"navbar-search-button\"><i class=\"fas fa-search\"></i></button>\r\n</div>";
},"useData":true});
})();