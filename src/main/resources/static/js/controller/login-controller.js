(function() {
	angular.module('webirpf').controller('LoginController', LoginController);

	'use strict';
	LoginController.$inject = [ '$rootScope', '$http', '$location', '$log' ];

	function LoginController($rootScope, $http, $location, $log) {
		$log.debug('Login Controller Is Loaded !');
	}
})();