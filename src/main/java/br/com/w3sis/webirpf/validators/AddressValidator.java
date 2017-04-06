package br.com.w3sis.webirpf.validators;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import br.com.w3sis.webirpf.models.Address;

public class AddressValidator implements Validator {

	@Override
	public boolean supports(Class<?> clazz) {
		return Address.class.isAssignableFrom(clazz);
	}

	@Override
	public void validate(Object target, Errors errors) {
		//

	}

}
