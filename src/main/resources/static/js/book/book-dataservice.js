(function(){
	angular.module('webirpf').factory('BookDataService', BookDataService);

	'use strict'
	BookDataService.$inject = ['$resource'];
	
	function BookDataService($resource){
		
		return $resource('/books/:id', {id: '@_id'}, {
			query:  {method:'GET', params:{id:''}, isArray:true},
			post: {method:'POST'},
		    update: {method:'PUT'},
		    remove: {method:'DELETE'}
		});		
	}
})();