(function() {
	angular.module('webirpf').controller('RegisterController',
			RegisterController);

	'use strict';
	RegisterController.$inject = [ '$scope', '$http', '$log', '$mdToast' ];

	function RegisterController($scope, $http, $log, $mdToast) {

		$scope.register = {};
		$scope.registerValidated = false;
		$scope.validate = Validate;
		$scope.selectedIndex = 0;

		$scope.$watch('selectedIndex', function(current, old) {
			if (current == 0) {
				$scope.registerValidated = false;
			} else {
				if ($scope.registerValidated == false) {
					showSimpleToast('Please complete data then click next!');
					$scope.selectedIndex = 0;
				}
			}
		});

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
									$scope.registerValidated = true;
									$scope.registerForm.cpf.$setValidity("cpf",
											true);
									$scope.selectedIndex = 1;
								},
								function errorcallback(response) {
									$log.debug(response);
									$scope.registerValidated = false;
									if (isCompleted(register)) {
										if (response.status == "400") {
											for (error in response.data.errors) {
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
