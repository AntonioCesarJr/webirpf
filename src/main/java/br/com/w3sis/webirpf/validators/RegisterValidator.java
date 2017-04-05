package br.com.w3sis.webirpf.validators;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import br.com.w3sis.webirpf.models.Register;

public class RegisterValidator implements Validator {

	@Override
	public boolean supports(Class<?> clazz) {
		return Register.class.isAssignableFrom(clazz);
	}

	@Override
	public void validate(Object target, Errors errors) {

	}

}
