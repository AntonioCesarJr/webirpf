(function() {
	angular.module('webirpf')
			.controller('sideNavController', sideNavController);

	'use strict';
	sideNavController.$inject = ['$rootScope', '$scope', '$timeout', '$mdSidenav', '$log' ];

	function sideNavController($rootScope, $scope, $timeout, $mdSidenav, $log) {

		var vm = this;
		vm.close = close

		function close() {
			$mdSidenav('left').close().then(function() {
				$log.debug("close LEFT is done");
			});
		}
		;
		$log.debug('Activated SideNav Controller');
	}
})();