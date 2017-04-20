package br.com.w3sis.webirpf.repositories;

import java.util.UUID;

import org.springframework.data.repository.PagingAndSortingRepository;

import br.com.w3sis.webirpf.models.UserApp;

public interface UserAppRepository extends PagingAndSortingRepository<UserApp, UUID> {

	UserApp findByEmail(String email);

}
