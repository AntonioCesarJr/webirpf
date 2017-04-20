package br.com.w3sis.webirpf.repositories;

import java.util.Collection;
import java.util.UUID;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import br.com.w3sis.webirpf.models.Book;

@Repository
public interface BookRepository extends PagingAndSortingRepository<Book, UUID> {

	@Override
	Collection<Book> findAll();

	Collection<Book> findByName(String name);

}
