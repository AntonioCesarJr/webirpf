(function(){
	angular.module('webirpf').factory('BookDataService', BookDataService);

	'use strict'
	BookDataService.$inject = ['$http'];
	
	function BookDataService($http){
		
		return {
			getBooks : getBooks,
			saveBook : saveBook,
			deleteBook : deleteBook
		}	
		
		function getBooks(){
			return $http({
				method : 'GET',
				url : '/books'
			}).then(getBooksComplete)
			  .catch(getBooksFailed);
			function getBooksComplete(response){
				return response;
			}
			function getBooksFailed(error){
				return error;
			}
		}
		
		function saveBook(book){
			return $http({
				method : 'POST',
				data : book,
				url : '/books'
			}).then(saveBookSuccess)
			  .catch(saveBookFailed);
			function saveBookSuccess(response){
				return response;
			}
			function saveBookFailed(error){
				return error;
			}
		}
		
		function deleteBook(book){
			return $http({
				method : 'DELETE',
				url : 'books/' + book.id
			}).then(deleteBookSuccess, deleteBoookFailed);
			function deleteBookSuccess(response) {
				return response;
			}
			function deleteBoookFailed(error) {
				return error;
			}
		}
	}
})();