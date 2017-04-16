(function() {
	angular.module('webirpf').controller('BookController', BookController);

	'use strict';
	BookController.$inject = [ '$scope', '$http', '$log', '$location' ];

	function BookController($scope, $http, $log, $location) {
		$scope.books = {};
		$scope.book = {};
		$scope.length = null;
		$scope.loadBooks = LoadBooks;
		$scope.addBook = AddBook;
		$scope.deleteBook = DeleteBook;
		$scope.editBook = EditBook;
		$scope.cancelForm = CancelForm;
		$scope.showHints = false;

		function LoadBooks() {
			$http.get('/books').then(function(response) {
				$scope.books = response.data;
				$scope.length = response.data.length;
				$log.debug(response);
			}, function(error) {
				$location.path("login");
			});
		}

		function AddBook(book) {
			$scope.showHints = false;
			$http({
				method : 'POST',
				data : this.book,
				url : 'books'
			}).then(function successCallback(response) {
				CleanForm();
				LoadBooks();
				$log.debug(response);
			}, function errorcallback(response) {
				$scope.showHints = true;
				$log.debug(response);
			});
		}

		function DeleteBook(book) {
			if (confirm("Are you sure! " + book.name + ' will be deleted!')) {
				$http({
					method : 'DELETE',
					url : 'books/' + this.book.id
				}).then(function successCallback(response) {
					CleanForm();
					LoadBooks();
					$log.debug(response);
				}, function errorcallback(response) {
					$log.debug(response);
				});
			}
		}

		function EditBook(book) {
			$scope.book = book;
		}

		function CancelForm() {
			CleanForm();
			LoadBooks();
		}

		function CleanForm() {
			$scope.bookForm.$setPristine();
			$scope.bookForm.$setUntouched();
			$scope.showHints = false;
			$scope.book = {};
		}

		LoadBooks();
		$log.debug('Book Controller Is Loaded !');
	}
})();