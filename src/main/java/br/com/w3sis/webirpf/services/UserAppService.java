package br.com.w3sis.webirpf.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

import br.com.w3sis.webirpf.models.UserApp;
import br.com.w3sis.webirpf.repository.UserAppRepository;

@Repository
public class UserAppService implements UserDetailsService {

	@Autowired
	UserAppRepository userAppRepository;

	@Override
	public UserDetails loadUserByUsername(String arg0) throws UsernameNotFoundException {
		UserApp user = userAppRepository.findByEmail(arg0);
		if (user == null) {
			throw new UsernameNotFoundException("User with this email was not found !");
		}
		return user;
	}

}
