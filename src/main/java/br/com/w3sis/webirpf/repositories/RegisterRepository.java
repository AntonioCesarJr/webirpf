package br.com.w3sis.webirpf.repositories;

import java.util.UUID;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import br.com.w3sis.webirpf.models.Register;

@Repository
public interface RegisterRepository extends PagingAndSortingRepository<Register, UUID> {

}
