package br.com.w3sis.webirpf.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.w3sis.webirpf.models.Register;
import br.com.w3sis.webirpf.repositories.RegisterRepository;
import br.com.w3sis.webirpf.validators.RegisterValidator;

@RestController
public class RegisterRestController {

	@Autowired
	RegisterRepository registerRepository;

	@InitBinder
	public void InitBinder(WebDataBinder binder) {
		binder.addValidators(new RegisterValidator());
	}

	@RequestMapping(value = "/validateregister", method = RequestMethod.POST)
	public ResponseEntity<Register> validate(@RequestBody @Valid Register register, BindingResult result)
			throws BindException {
		if (result.hasErrors()) {
			throw new BindException(result);
		}
		return new ResponseEntity<>(register, HttpStatus.OK);
	}

}
