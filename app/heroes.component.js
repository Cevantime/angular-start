(function (app) {

	app.HeroesComponent =
		ng.core.Component({
			selector: 'my-heroes',
			templateUrl: 'templates/heroes.html',
			styleUrls: [
				'styles/heroes.css'
			]
		})
		.Class({
			constructor: [app.HeroService, function (heroService) {
				this.title = 'Tour of Heroes';
				this.selectedHero = null;
				this.heroService = heroService;
				this.heroes = [];
			}],
			getHeroes: function () {
				var obj = this;
				this.heroService.getHeroes().then(function (heroes) {
					obj.heroes = heroes;
				});
			},
			onSelect: function (hero) {
				this.selectedHero = hero;
			}
		});

	app.HeroesComponent.prototype.ngOnInit = function () {
		this.getHeroes();
	}

})(window.app || (window.app = {}));
