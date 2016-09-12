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
			constructor: function () {
				this.hero = null;
			}
		});
})(window.app || (window.app = {}));