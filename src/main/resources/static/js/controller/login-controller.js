(function() {
	angular.module('webirpf').controller('LoginController', LoginController);

	'use strict';
	LoginController.$inject = [ '$rootScope', '$http', '$location', '$log' ];

	function LoginController($rootScope, $http, $location, $log) {
		var self = this
		
		self.goto = function(page){
			$location.url(page);
		};

		var authenticate = function(credentials, callback) {

			var headers = credentials ? {
				authorization : "Basic "
						+ btoa(credentials.username + ":"
								+ credentials.password)
			} : {};

			$http.get('user', {
				headers : headers
			}).then(function(response) {
				if (response.data.name) {
					$rootScope.authenticated = true;
					$rootScope.userrrName = response.data.name; 
				} else {
					$rootScope.authenticated = false;
					$rootScope.userrrName = "";
				}
				callback && callback();
			}, function() {
				$rootScope.authenticated = false;
				callback && callback();
			});

		}

		authenticate();
		
		self.credentials = {};
		
		self.login = function() {
			authenticate(self.credentials, function() {
				if ($rootScope.authenticated) {
					$location.path("/book");
					self.error = false;
				} else {
					$location.path("/login");
					self.error = true;
				}
			});
		};
		
		self.logout = function() {
			  $http.post('logout', {}).finally(function() {
			    $rootScope.authenticated = false;
			    $rootScope.userrrName = "";
			    $location.path("/");
			  });
			}
	}
})();