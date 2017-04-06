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

		$scope.registerValidated = false;
		$scope.validate = Validate;
		$scope.selectedIndex = 0;
		$scope.searchCEP = SearchCEP;
		$scope.cleanAttributes = CleanAttributes; 

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

		function isCompleted(register) {
			return (!register.name == '' && !register.cpf == '' && !register.email == '') ? true
					: false;
		}

		function showSimpleToast(text) {
			$mdToast.show($mdToast.simple().textContent(text).position(
					'top right').hideDelay(3000));
		}
		
		function CompleteAttributes(data){
			$scope.address.street = data.logradouro;
			$scope.address.complement = data.comlemento;
			$scope.address.neighborhood = data.bairro;
			$scope.address.city = data.localidade;
			$scope.address.state = data.uf;
		}
		
		function CleanAttributes(){
			$log.debug('Called')
			$scope.address.street = '';
			$scope.address.complement = '';
			$scope.address.neighborhood = '';
			$scope.address.city = '';
			$scope.address.state = '';
		}

		$log.debug('Register Controller Is Loaded !');
	}
	;
})();
