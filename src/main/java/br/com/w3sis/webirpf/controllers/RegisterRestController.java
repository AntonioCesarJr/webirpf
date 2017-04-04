package br.com.w3sis.webirpf.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.w3sis.webirpf.models.Register;
import br.com.w3sis.webirpf.repository.RegisterRepository;

@RestController
public class RegisterRestController {

	@Autowired
	RegisterRepository registerRepository;

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<Register> save(@RequestBody Register register) {
		registerRepository.save(register);
		return new ResponseEntity<>(register, HttpStatus.OK);
	}

}
