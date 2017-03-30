package br.com.w3sis.webirpf.controllers;

import java.security.Principal;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UiApplication {

	@RequestMapping("/user")
	public Principal user(Principal user) {
		Authentication authentication = (Authentication) user;
		System.out.println(authentication);
		return user;
	}

}
