package br.com.w3sis.webirpf.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import br.com.w3sis.webirpf.models.UserApp;

public interface UserAppRepository extends PagingAndSortingRepository<UserApp, Long> {

	UserApp findByEmail(String email);

}
