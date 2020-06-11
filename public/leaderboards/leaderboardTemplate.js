(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['leaderboardAnimal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<ul class=\"animal\">\n    <div class=\"animal-rank-trophy\">\n        <i class=\"fas fa-trophy\"></i>\n    </div>\n    <div class=\"animal-rank\">15</div>\n    <h3 class=\"animal-pic\">\n        <img class=\"animalImage\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"animalImage") || (depth0 != null ? lookupProperty(depth0,"animalImage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"animalImage","hash":{},"data":data,"loc":{"start":{"line":7,"column":38},"end":{"line":7,"column":53}}}) : helper)))
    + "\">\n    </h3>\n    <h3 class=\"animal-name\">\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"animalName") || (depth0 != null ? lookupProperty(depth0,"animalName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"animalName","hash":{},"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":10,"column":22}}}) : helper)))
    + "\n    <h5 class=\"animal-type\">\n        Type: "
    + alias4(((helper = (helper = lookupProperty(helpers,"animalType") || (depth0 != null ? lookupProperty(depth0,"animalType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"animalType","hash":{},"data":data,"loc":{"start":{"line":12,"column":14},"end":{"line":12,"column":28}}}) : helper)))
    + "\n    </h5>\n    <h5 class=\"animal-age\">\n        Age: "
    + alias4(((helper = (helper = lookupProperty(helpers,"animalAge") || (depth0 != null ? lookupProperty(depth0,"animalAge") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"animalAge","hash":{},"data":data,"loc":{"start":{"line":15,"column":13},"end":{"line":15,"column":26}}}) : helper)))
    + "\n    </h5>\n    <h5 class=\"animal-votes\">\n        Votes: 5\n    </h5>\n</ul>\n\n \n";
},"useData":true});
})();