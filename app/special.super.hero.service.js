(function (app) {
	app.HeroService =
		ng.core.Injectable().Class({
			constructor: function () {
				
			},
			getHeroes : function(){
				return app.HEROES;
			}
		});

})(window.app || (window.app = {}));


