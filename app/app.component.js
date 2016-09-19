(function(app){
	app.AppComponent = ng.core.Component({
		selector: 'my-app',
		templateUrl : 'templates/app.html'
	}).Class({
		constructor : function() {
			this.title = 'Tour of heroes';
		}
	});
//	ng.router.provideRoutes({})(app.AppComponent);
})(window.app || (window.app = {}))