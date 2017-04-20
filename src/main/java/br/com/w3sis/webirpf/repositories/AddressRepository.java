package br.com.w3sis.webirpf.repositories;

import java.util.UUID;

import org.springframework.data.repository.PagingAndSortingRepository;

import br.com.w3sis.webirpf.models.Address;

public interface AddressRepository extends PagingAndSortingRepository<Address, UUID> {

}
