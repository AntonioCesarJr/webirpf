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
			if($rootScope.authenticated){
				$location.path("/");
			}else{
				var headers = credentials ? {
					authorization : "Basic "
							+ btoa(credentials.username + ":"
									+ credentials.password)
				} : {};

				$http.get('/user', {
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
				}, function(error) {
					$log.debug(error);
					$rootScope.authenticated = false;
					callback && callback();
				});
			}
		}

		self.credentials = {};
		
		self.login = function() {
			authenticate(self.credentials, function() {
				if ($rootScope.authenticated) {
					$location.path("/book");
					self.error = false;
				} else {
					$location.path("/login-form");
					self.error = true;
				}
			});
		};
		
		self.logout = function() {
			  $http.post('logout', {}).finally(function() {
			    $rootScope.authenticated = false;
			    $location.path("/");
			  });
			}
	}
})();