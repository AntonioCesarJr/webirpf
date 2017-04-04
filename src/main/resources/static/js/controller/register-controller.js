(function() {
	angular.module('webirpf').controller('RegisterController',
			RegisterController);

	'use strict';
	RegisterController.$inject = [ '$scope', '$http', '$log', '$mdToast' ];

	function RegisterController($scope, $http, $log, $mdToast) {

		$scope.register = {};
		$scope.add = Add;

		function Add(register) {
			if (isCompleted(register)) {
				$http({
					method : 'POST',
					data : this.register,
					url : 'register'
				}).then(function successCallback(response) {
					$log.debug(response);
				}, function errorcallback(response) {
					if (isCompleted(register)) {
						if(response.status="500"){
							if(response.data.message.indexOf('Validation failed for class') != -1){
								$scope.registerForm.cpf.$setValidity("validCPF",false);
							}
							if(response.data.message.indexOf('could not execute statement') != -1){
								$scope.registerForm.cpf.$setValidity("uniqueCPF",false);
							}
						}
					}
					$log.debug(response);
				});
			}
		}

		function isCompleted(register) {
			return (!register.name == '' && !register.cpf == '') ? true : false;
		}

		function showSimpleToast(text) {
			$mdToast.show($mdToast.simple().textContent(text).position(
					'top right').hideDelay(3000));
		}
		;

		$log.debug('Register Controller Is Loaded !');
	}
	;
})();
