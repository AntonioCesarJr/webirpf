(function() {
	angular.module('webirpf').controller('BookController', BookController);

	'use strict';
	BookController.$inject = [ '$scope', '$http', '$log' ];

	function BookController($scope, $http, $log) {
		$scope.books = {};
		$scope.book = {};
		$scope.length = null;
		$scope.loadBooks = LoadBooks;
		$scope.submit = SubmitBook;
		$scope.del = DeleteBook;
		$scope.edit = EditBook;
		
		function LoadBooks() {
			$http.get('/books').then(function(response) {
				$scope.books = response.data;
				$scope.length = response.data.length;
				$scope.book = {};
			});
		}

		function SubmitBook() {
			$http({
				method : 'POST',
				data: this.book,
				url : 'books'
			}).then(function successCallback(response) {
				LoadBooks();
				$log.debug(response);
			}, function errorcallback(response) {
				$log.debug(response);
			});
		}
		
		function DeleteBook() {
			$log.debug(this.book);
			$http({
				method : 'DELETE',
				url : 'books/' + this.book.id
			}).then(function successCallback(response) {
				LoadBooks();
				$log.debug(response);
			}, function errorcallback(response) {
				$log.debug(response);
			});
		}
		
		function EditBook(){
			$scope.book = this.book;
		}

		$log.debug('Book Controller Is Loaded !');
	}
})();