package br.com.w3sis.webirpf.repository;

import java.util.Collection;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.w3sis.webirpf.models.BookItem;

public interface BookItemRepository extends JpaRepository<BookItem, Long> {

	@Override
	List<BookItem> findAll();

	@Override
	Page<BookItem> findAll(Pageable pageable);

	Collection<BookItem> findByName(String name);

	Collection<BookItem> findByBookId(Long id);

}
