(function(){
	angular.module('webirpf')
		.controller('HomeController', HomeController);

		'use strict';
		HomeController.$inject = ['$scope','$location', '$log'];

		function HomeController($scope, $location, $log) {
			
			var self = this;
			
			self.goto = goTo; 

			function goTo(page){
				$location.url(page);
			};
			
			$log.debug('Home Controller Is Loaded !');
		};
})();