package br.com.w3sis.webirpf.controllers;

import javax.validation.Valid;

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

import br.com.w3sis.webirpf.models.Address;
import br.com.w3sis.webirpf.validators.AddressValidator;

@RestController
public class AddressRestController {

	@InitBinder
	public void InitBinder(WebDataBinder binder) {
		binder.addValidators(new AddressValidator());
	}

	@RequestMapping(value = "/validateaddress", method = RequestMethod.POST)
	public ResponseEntity<Address> validate(@RequestBody @Valid Address address, BindingResult result)
			throws BindException {
		if (result.hasErrors()) {
			throw new BindException(result);
		}
		return new ResponseEntity<>(address, HttpStatus.OK);
	}

}
