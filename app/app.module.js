(function (app) {
	app.AppModule =
		ng.core.NgModule({
			imports: [ng.platformBrowser.BrowserModule,ng.forms.FormsModule, app.routing],
			declarations: [app.AppComponent,app.HeroesComponent, app.HeroDetailComponent, app.DashboardComponent],
			bootstrap: [app.AppComponent],
			providers : [app.HeroService]
		})
		.Class({
			constructor: [app.HeroService,function (heroService) {
				this.heroService = heroService;
			}]
		});
})(window.app || (window.app = {}));
