package br.com.w3sis.webirpf.controllers;

import java.util.Collection;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.w3sis.webirpf.models.Book;
import br.com.w3sis.webirpf.models.UserApp;
import br.com.w3sis.webirpf.repository.BookRepository;

@RestController
public class BookRestController {

	@Autowired
	BookRepository bookRepository;

	@RequestMapping(value = "/books", method = RequestMethod.GET)
	public ResponseEntity<Collection<Book>> findAll(@AuthenticationPrincipal UserApp user) {
		Collection<Book> books = bookRepository.findAll();
		return new ResponseEntity<>(books, HttpStatus.OK);
	}

	@RequestMapping(value = "/bookspageable", method = RequestMethod.GET)
	public Page<Book> findAll(Pageable pageable) {
		return bookRepository.findAll(pageable);
	}

	@RequestMapping(value = "/books/{id}", method = RequestMethod.GET)
	public ResponseEntity<Book> findOne(@PathVariable Long id) {
		Book book = bookRepository.findOne(id);
		if (book == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<>(book, HttpStatus.OK);
		}
	}

	@RequestMapping(value = "/books", method = RequestMethod.POST)
	public ResponseEntity<Book> save(@RequestBody Book book) {
		bookRepository.save(book);
		return new ResponseEntity<>(book, HttpStatus.OK);
	}

	@RequestMapping(value = "/books/{id}", method = RequestMethod.DELETE)
	@Transactional
	public ResponseEntity<Book> delete(@PathVariable Long id) {
		Book book = bookRepository.findOne(id);
		if (book == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			bookRepository.delete(book);
			return new ResponseEntity<>(book, HttpStatus.OK);
		}
	}
}
