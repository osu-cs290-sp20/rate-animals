(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['galleryAnimal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"gallery\">\n    <div class = \"content\">  \n        <h3 class = \"animalName\"> \n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"animalName") || (depth0 != null ? lookupProperty(depth0,"animalName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"animalName","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":26}}}) : helper)))
    + "\n        </h3>    \n        <img class = \"animalPicture\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"animalImage") || (depth0 != null ? lookupProperty(depth0,"animalImage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"animalImage","hash":{},"data":data,"loc":{"start":{"line":6,"column":42},"end":{"line":6,"column":57}}}) : helper)))
    + "\" />\n        <p class = \"description\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":7,"column":33},"end":{"line":7,"column":48}}}) : helper)))
    + "</p>\n    </div>\n</article>";
},"useData":true});
})();