(function() {
	angular.module('webirpf').controller('BookController', BookController);

	'use strict';
	BookController.$inject = [ 'BookDataService', '$scope', '$mdToast', '$log' ];

	function BookController(BookDataService, $scope, $mdToast, $log) {

		var vm = this;
		vm.books = [];
		vm.book = {};
		vm.getBooks = getBooks;
		vm.saveBook = saveBook;
		vm.deleteBook = deleteBook;
		vm.editBook = editBook;
		vm.cancelForm = cancelForm;
		vm.showHints = false;

		activate();

		function activate() {
			return getBooks(function() {
				$log.debug('Activated Book View');
			});
		}

		function getBooks() {
			return BookDataService.query(function(response) {
				vm.books = response;
				return vm.books;
			})
		}

		function saveBook(book) {
			vm.showHints = false;
			if (book.id == undefined) {
				return BookDataService.post(book, success, failed);
				function success(response) {
					cleanForm();
					/*Reload all items*/
					getBooks();
					/*Insert element directly on array whithout reload all items */
//					vm.books.push(response);
					showSimpleToast('Saved with success !');
				}
				function failed(error) {
					vm.showHints = true;
					$log.debug(error);
				}
			} else {
				return BookDataService.update(book, success, failed);
				function success(response) {
					cleanForm();
					getBooks();
					showSimpleToast('Updated with success !');
				}
				function failed(error) {
					vm.showHints = true;
					$log.debug(error);
				}
			}
		}

		function deleteBook(book) {
			if (confirm("Are you sure! " + book.name + ' will be deleted!')) {
				return BookDataService.remove(book, success, failed);
				function success(response){
					cleanForm();
					/*Reload all items*/
					getBooks();
					/*Remove element without reload all items*/
//					var idx = vm.books.indexOf(book);
//					vm.books.splice(idx, 1);
					showSimpleToast('Deleted with success !');
				}
				function failed(error){
					getBooks();
					$log.debug(error);
				}
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