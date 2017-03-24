package br.com.w3sis.webirpf.repository;

import java.util.Collection;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import br.com.w3sis.webirpf.models.Book;

@Repository
public interface BookRepository extends PagingAndSortingRepository<Book, Long> {

	@Override
	Collection<Book> findAll();

	Collection<Book> findByName(String name);

}
