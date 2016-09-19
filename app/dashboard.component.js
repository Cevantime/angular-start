(function (app) {
	app.DashboardComponent = ng.core.Component({
		selector: 'my-dashboard',
		templateUrl: 'templates/dashboard.html',
	}).Class({
		constructor: [app.HeroService, function (heroService) {
			this.heroService = heroService;
		}],
		gotoDetail : function () {
			
		}
	});

	app.DashboardComponent.prototype.ngOnInit = function () {
		var those = this;
		this.heroService.getHeroes()
		.then(function (heroes){
			those.heroes = heroes.slice(1, 5);
		});
	};
	
	
})(window.app || (window.app = {}));