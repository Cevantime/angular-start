(function (app) {

	app.AppComponent =
			ng.core.Component({
				selector: 'my-app',
				templateUrl: 'templates/heroes.html',
				styleUrls: [
					'styles/heroes.css'
				],
				providers: [app.HeroService]
			})
			.Class({
				
				constructor: [app.HeroService, function (heroService) {
					this.title = 'Tour of Herores';
					this.selectedHero = null;
					this.heroeService = heroService;
				}],
			
				getHeroes: function () {
					this.heroes = this.heroeService.getHeroes();
				},
				
				onSelect: function (hero) {
					this.selectedHero = hero;
				}
			});
			
	app.AppComponent.prototype.ngOnInit = function () {
		this.getHeroes();
	}
	
})(window.app || (window.app = {}));
