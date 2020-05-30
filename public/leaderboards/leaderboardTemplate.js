(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['leaderboardAnimal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " <ul class=\"animal\">\r\n     <li class=\"animal-rank\">\r\n         <i class=\"fas fa-trophy\"></i> \r\n     </li>\r\n     <li class=\"animal-pic\">\r\n         <img class=\"animalImage\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"animalImage") || (depth0 != null ? lookupProperty(depth0,"animalImage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"animalImage","hash":{},"data":data,"loc":{"start":{"line":6,"column":39},"end":{"line":6,"column":54}}}) : helper)))
    + "\">\r\n     </li>\r\n     <li class=\"animal-name\">\r\n         "
    + alias4(((helper = (helper = lookupProperty(helpers,"animalName") || (depth0 != null ? lookupProperty(depth0,"animalName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"animalName","hash":{},"data":data,"loc":{"start":{"line":9,"column":9},"end":{"line":9,"column":23}}}) : helper)))
    + "\r\n     <li class=\"animal-type\">\r\n         "
    + alias4(((helper = (helper = lookupProperty(helpers,"animalType") || (depth0 != null ? lookupProperty(depth0,"animalType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"animalType","hash":{},"data":data,"loc":{"start":{"line":11,"column":9},"end":{"line":11,"column":23}}}) : helper)))
    + "\r\n     </li>\r\n     <li class=\"animal-age\">\r\n         "
    + alias4(((helper = (helper = lookupProperty(helpers,"animalAge") || (depth0 != null ? lookupProperty(depth0,"animalAge") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"animalAge","hash":{},"data":data,"loc":{"start":{"line":14,"column":9},"end":{"line":14,"column":22}}}) : helper)))
    + "\r\n     </li>\r\n     </li>\r\n </ul>";
},"useData":true});
})();