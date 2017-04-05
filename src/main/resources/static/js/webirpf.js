angular
		.module(
				'webirpf',
				[ 'ngRoute', 'ngResource', 'ngSanitize', 'ngAnimate', 'ngAria',
						'ngMessages', 'ngMaterial' ])
		.config(
				function($routeProvider, $locationProvider, $httpProvider) {

					$locationProvider.html5Mode(true);

					$routeProvider.when('/', {
						templateUrl : "/partial/home.html",
						controller : 'HomeController',
						controllerAs : 'hmCtrl'
					}).when('/login-form', {
						templateUrl : "/partial/login-form.html",
						controller : 'LoginController',
						controllerAs : 'loginCtrl'
					}).when('/book', {
						templateUrl : "/partial/book.html",
						controller : 'BookController'
					}).when('/register', {
						templateUrl : "/partial/register.html",
						controller : 'RegisterController',
						controllerAs : 'regCtrl'
					}).otherwise('/');

					$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

				}).config(function($mdThemingProvider) {

			var neonRedMap = $mdThemingProvider.extendPalette('red', {
				'500' : '#ff0000',
				'contrastDefaultColor' : 'dark'
			});
			$mdThemingProvider.definePalette('neonRed', neonRedMap);

			$mdThemingProvider.theme('default').warnPalette('orange').backgroundPalette('grey');

		}).run(function($log) {
			$log.debug("Congratulations !! WebSite is running!");
		});