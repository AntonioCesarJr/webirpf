package br.com.w3sis.webirpf.controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.w3sis.webirpf.models.BookItem;
import br.com.w3sis.webirpf.repositories.BookItemRepository;

@RestController
public class BookItemRestController {

	@Autowired
	BookItemRepository bookItemRepository;

	@RequestMapping(value = "/bookitems", method = RequestMethod.GET)
	public ResponseEntity<Collection<BookItem>> getAll() {
		Collection<BookItem> bookItems = bookItemRepository.findAll();
		if (bookItems.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<>(bookItems, HttpStatus.OK);
		}
	}

	@RequestMapping(value = "/bookitems/{bookId}", method = RequestMethod.GET)
	public ResponseEntity<Collection<BookItem>> bookitemsbybookid(@PathVariable Long bookId) {
		Collection<BookItem> bookItems = bookItemRepository.findByBookId(bookId);
		if (bookItems.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<>(bookItems, HttpStatus.OK);
		}
	}

}
