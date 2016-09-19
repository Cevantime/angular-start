(function (app) {
	app.HeroService =
		ng.core.Class({
			constructor: function () {
				
			},
			getHeroes: function() {
				return Promise.resolve(app.HEROES);
			},
			getHeroesSlowly : function(){
				return new Promise(function(resolve){
					setTimeout(function(){resolve(app.HEROES)}, 2000)
				});
			}
		});

})(window.app || (window.app = {}));


