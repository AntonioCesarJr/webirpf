angular.module(
		'webirpf',
		[ 'ngRoute', 'ngResource', 'ngSanitize', 'ngAnimate', 'ngAria',
				'ngMessages', 'ngMaterial' ]).config(
		function($routeProvider, $locationProvider, $httpProvider) {

			$locationProvider.html5Mode(true);

			$routeProvider.when('/', {
				templateUrl : "/partial/home.html"
			}).when('/login', {
				templateUrl : "/partial/login.html",
				controller: 'LoginController',
				controllerAs: 'loginCtrl'
			}).when('/book', {
				templateUrl : "/partial/book.html",
				controller: 'BookController'
			}).otherwise('/');
			
			$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
			
			
		}).config(
		function($mdThemingProvider) {

			var neonRedMap = $mdThemingProvider.extendPalette('red', {
				'500' : '#ff0000',
				'contrastDefaultColor' : 'dark'
			});
			$mdThemingProvider.definePalette('neonRed', neonRedMap);

			$mdThemingProvider.theme('default').primaryPalette('indigo')
			.accentPalette('orange').warnPalette('neonRed');
			
		}).run(function($log) {
	$log.debug("Congratulations !! WebSite is running!");
});