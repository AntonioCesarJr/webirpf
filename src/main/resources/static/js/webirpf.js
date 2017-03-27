angular.module(
		'webirpf',
		[ 'ngRoute', 'ngResource', 'ngSanitize', 'ngAnimate', 'ngAria',
				'ngMessages', 'ngMaterial' ]).config(
		function($routeProvider, $locationProvider, $httpProvider) {

			$locationProvider.html5Mode(true);

			$routeProvider.when('/', {
				templateUrl : "/partial/home.html"
			}).when('/book', {
				templateUrl : "/partial/book.html"
			}).otherwise('/');
			
			$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
			
			
		}).config(
		function($mdThemingProvider) {

			var neonRedMap = $mdThemingProvider.extendPalette('red', {
				'500' : '#ff0000',
				'contrastDefaultColor' : 'dark'
			});
			$mdThemingProvider.definePalette('neonRed', neonRedMap);

//			$mdThemingProvider.theme('default').primaryPalette('indigo')
//					.accentPalette('deep-orange').warnPalette('red')
//					.backgroundPalette('yellow').dark();
		}).run(function($log) {
	$log.debug("Congratulations !! WebSite is running!");
});