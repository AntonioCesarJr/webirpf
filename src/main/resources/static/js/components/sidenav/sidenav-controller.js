(function() {
	angular.module('webirpf')
			.controller('sideNavController', sideNavController);

	'use strict';
	sideNavController.$inject = [ '$rootScope', '$scope', '$timeout',
			'$mdSidenav', '$log' ];

	function sideNavController($rootScope, $scope, $timeout, $mdSidenav, $log) {

		var vm = this;
		vm.close = close;
		vm.toggleLeft = buildToggler('md-sidenav');

		function buildToggler(componentId) {
			return function() {
				$mdSidenav(componentId).toggle();
			};
		}
		
		$scope.$watch('', function(){
			
		})

		$log.debug('Activated SideNav Controller');
	}
})();