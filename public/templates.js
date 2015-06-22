this["hullaHop"] = this["hullaHop"] || {};
this["hullaHop"]["templates"] = this["hullaHop"]["templates"] || {};
this["hullaHop"]["templates"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "Hej "
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + ", hvordan går det med din "
    + alias3(((helper = (helper = helpers.mothersName || (depth0 != null ? depth0.mothersName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"mothersName","hash":{},"data":data}) : helper)));
},"useData":true});