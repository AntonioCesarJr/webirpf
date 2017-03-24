(function(){
	angular.module('webirpf')
		.controller('MenuController', MenuController);

		'use strict';
		MenuController.$inject = ['$scope','$location', '$log'];

		function MenuController($scope, $location, $log) {
			$scope.goto = function(page){
				$location.url(page);
			};
			
			$log.debug('Book Controller Is Loaded !');
		};
})();		




		