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
						if (response.status == "500"){
							showSimpleToast('CPF already registered!');
						}else if(response.status == "409"){
							showSimpleToast('Invalid CPF!');
						};
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
