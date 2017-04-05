(function() {
	angular.module('webirpf').controller('RegisterController',
			RegisterController);

	'use strict';
	RegisterController.$inject = [ '$scope', '$http', '$log', '$mdToast' ];

	function RegisterController($scope, $http, $log, $mdToast) {

		$scope.register = {};
		$scope.validate = Validate;

		function Validate(register) {
			if (isCompleted(register)) {
				$http({
					method : 'POST',
					data : this.register,
					url : 'validateregister'
				})
						.then(
								function successCallback(response) {
									$log.debug(response);
									$scope.registerForm.cpf.$setValidity("cpf", true);
								},
								function errorcallback(response) {
									if (isCompleted(register)) {
										if (response.status == "400") {
											for (error in response.data.errors) {
												$log
														.debug(error.defaultMessage);
												showSimpleToast(response.data.errors[error].defaultMessage);
												$scope.registerForm.cpf
														.$setValidity(
																response.data.errors[error].field,
																false);
											}
										} else if (response.status == "500") {
											showSimpleToast('CPF already registered !');
										}
									}
									$log.debug(response);
								});
			}
		}

		function isCompleted(register) {
			return (!register.name == '' && !register.cpf == '' && !register.email == '') ? true
					: false;
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
