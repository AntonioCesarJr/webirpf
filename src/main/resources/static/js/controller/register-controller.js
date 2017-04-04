(function(){
	angular.module('webirpf')
		.controller('RegisterController', RegisterController);

		'use strict';
		RegisterController.$inject = ['$scope','$location', '$log'];

		function RegisterController($scope, $location, $log) {
			
			var self = this;
			self.register = Register;
			self.name='';
			self.cpf='';
			
			function Register(){
				$log.debug(self.name);
				$log.debug(self.cpf);
			}
			
			$log.debug('Register Controller Is Loaded !');
		};
})();		




		