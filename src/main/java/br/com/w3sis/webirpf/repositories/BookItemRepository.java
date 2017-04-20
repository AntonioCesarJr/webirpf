package br.com.w3sis.webirpf.repositories;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.w3sis.webirpf.models.BookItem;

public interface BookItemRepository extends JpaRepository<BookItem, UUID> {

	@Override
	List<BookItem> findAll();

	@Override
	Page<BookItem> findAll(Pageable pageable);

	Collection<BookItem> findByName(String name);

	Collection<BookItem> findByBookId(Long id);

}
