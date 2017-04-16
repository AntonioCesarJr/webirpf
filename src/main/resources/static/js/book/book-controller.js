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
				return vm.books;
			})
		}

		function saveBook(book) {
			vm.showHints = false;
			return BookDataService.saveBook(book)
			.then(function(response) {
				if (response.status == "200"){
					cleanForm();
					getBooks();
					showSimpleToast('Saved with success !!');
				}else{
					$log.debug(response);
					vm.showHints = true;
				}
			})
		}

		function deleteBook(book) {
			if (confirm("Are you sure! " + book.name + ' will be deleted!')) {
				return BookDataService.deleteBook(book).then(
						function(response) {
							if (response.status == "200"){
								cleanForm();
								getBooks();
								showSimpleToast('Deleted with success !!');
							}else{
								$log.debug(response);
								showSimpleToast('Deleted failed !!');
							}
						});
			}
		}

		function editBook(book) {
			vm.book = book;
		}

		function cancelForm() {
			cleanForm();
			getBooks();
		}

		function cleanForm() {
			$scope.bookForm.$setPristine();
			$scope.bookForm.$setUntouched();
			vm.showHints = false;
			vm.book = {};
		}

		function showSimpleToast(text) {
			$mdToast.show($mdToast.simple().textContent(text).position(
					'bottom right').hideDelay(3000));
		}
	}
})();