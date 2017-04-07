(function() {
	angular.module('webirpf').controller('RegisterController',
			RegisterController);

	'use strict';
	RegisterController.$inject = [ '$scope', '$http', '$log', '$mdToast' ];

	function RegisterController($scope, $http, $log, $mdToast) {

		$scope.register = {
			name : "Antonio",
			cpf : "164.555.398-18",
			email : "jrcesar4@gmail.com"
		};

		$scope.address = {};

		$scope.selectedIndex = 0;
		$scope.registerValidated = false;
		$scope.validateRegister = ValidateRegister;
		$scope.addressValidated = false;
		$scope.validateAddress = ValidateAddress;

		$scope.searchCEP = SearchCEP;
		$scope.cleanAttributes = CleanAttributes;

		$scope.$watch('selectedIndex',
			function(current, old) {
				if (current > old) {
					if (current == 1) {
						if (!$scope.registerValidated) {
							showSimpleToast('Please complete data then click next!');
							$scope.selectedIndex = 0;
						}
					} else if (current == 2) {
						if (!$scope.registerValidated) {
							showSimpleToast('Please complete data then click next!');
							$scope.selectedIndex = 0;
						}else if (!$scope.addressValidated) {
							showSimpleToast('Please complete data then click next!');
							$scope.selectedIndex = 1;
						}
					}
				} else {
					if (current == 0) {
						$scope.registerValidated = false;
					} else if (current == 1) {
						$scope.addressValidated = false;
					}
				}
	
			});

		function ValidateRegister(register) {
			if (isRegisterCompleted(register)) {
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

		function ValidateAddress(address) {
			$log.debug(address);
			if (isAddressCompleted(address)) {
				$http({
					method : 'POST',
					data : this.address,
					url : 'validateaddress'
				})
						.then(
								function successCallback(response) {
									$scope.addressValidated = true;
									$scope.selectedIndex = 2;
								},
								function errorcallback(response) {
									$scope.addressValidated = false;
									if (isAddressCompleted(address)) {
										if (response.status == "400") {
											for (error in response.data.errors) {
												showSimpleToast(response.data.errors[error].defaultMessage);
												$scope.addressForm.cpf
														.$setValidity(
																response.data.errors[error].field,
																false);
											}
										}
									}
								});
			}
		}

		function SearchCEP(cep) {
			var uri = 'https://viacep.com.br/ws/' + cep + '/json/';
			$log.debug(uri);
			$http({
				method : 'GET',
				url : 'https://viacep.com.br/ws/' + cep + '/json/'
			}).then(function success(response) {
				CompleteAttributes(response.data);
			}, function error(response) {
				showSimpleToast('Web Service fail ! -> ' + response.data)
			});
		}

		function isRegisterCompleted(register) {
			return (!register.name == '' && !register.cpf == '' && !register.email == '') ? true
					: false;
		}

		function isAddressCompleted(address) {
			return true;
		}

		function showSimpleToast(text) {
			$mdToast.show($mdToast.simple().textContent(text).position(
					'top right').hideDelay(3000));
		}

		function CompleteAttributes(data) {
			$scope.address.street = data.logradouro;
			$scope.address.complement = data.comlemento;
			$scope.address.neighborhood = data.bairro;
			$scope.address.city = data.localidade;
			$scope.address.state = data.uf;
		}

		function CleanAttributes() {
			$log.debug('Called')
			$scope.address.street = '';
			$scope.address.number = '';
			$scope.address.complement = '';
			$scope.address.neighborhood = '';
			$scope.address.city = '';
			$scope.address.state = '';
		}

		$log.debug('Register Controller Is Loaded !');
	}
	;
})();
