(function (app) {
	app.HeroDetailComponent =
			ng.core.Component({
				selector: 'my-hero-detail',
				templateUrl: 'templates/hero-detail.html',
				inputs: [
					'hero'
				]
			})
			.Class({
				constructor: [app.HeroService, ng.router.ActivatedRoute, function (heroService, route) {
						this.heroService = heroService;
						this.route = route;
						this.hero = null;
					}]
			});
			
	app.HeroDetailComponent.prototype.ngOnInit = function () {
		this.route.params.forEach(function (params) {
			var id = parseInt(params['id']);
			this.heroService.getHero(id).then(function(hero){
				this.hero = hero;
			});
		});
	}
})(window.app || (window.app = {}));