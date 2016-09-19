(function (app) {
	var ROUTES = [
		{
			path: 'heroes',
			component: app.HeroesComponent
		},
		{
			path: 'dashboard',
			component: app.DashboardComponent
		},
		{
			path: '',
			redirectTo: '/dashboard',
			pathMatch: 'full'
		},
		{
			path: 'detail/:id',
			component: app.HeroDetailComponent
		}
	];
	app.routing = ng.router.RouterModule.forRoot(ROUTES);
})(window.app || (window.app = {}));


