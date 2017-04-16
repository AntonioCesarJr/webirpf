(function() {
	angular.module('webirpf').controller('BookController', BookController);

	'use strict';
	BookController.$inject = [ 'BookDataService', '$scope', '$mdToast', '$log' ];

	function BookController(BookDataService, $scope, $mdToast, $log) {

		var vm = this;
		vm.books = {};
		vm.book = {};
		vm.getBooks = getBooks;
		vm.saveBook = saveBook;
		vm.deleteBook = deleteBook;
		vm.editBook = editBook;
		vm.cancelForm = cancelForm;
		vm.showHints = false;

		activate();

		function activate() {
			getBooks().then(function() {
				$log.debug('Activated Book View');
			});
		}

		function getBooks() {
			return BookDataService.getBooks().then(function(response) {
				vm.books = response.data;
			})
		}

		function saveBook(book) {
			vm.showHints = false;
			return BookDataService.saveBook(book).then(function(response) {
				CleanForm();
				getBooks();
			})
		}

		function deleteBook(book) {
			if (confirm("Are you sure! " + book.name + ' will be deleted!')) {
				return BookDataService.deleteBook(book).then(
						function(response) {
							CleanForm();
							getBooks();
						})
			}
		}

		function editBook(book) {
			vm.book = book;
		}

		function CancelForm() {
			CleanForm();
		}

		function CleanForm() {
			$scope.bookForm.$setPristine();
			$scope.bookForm.$setUntouched();
			vm.showHints = false;
			vm.book = {};
		}

		function showSimpleToast(text) {
			$mdToast.show($mdToast.simple().textContent(text).position(
					'top right').hideDelay(3000));
		}
	}
})();