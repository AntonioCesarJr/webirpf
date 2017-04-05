package br.com.w3sis.webirpf.models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;
import org.hibernate.validator.constraints.br.CPF;

@Entity
public class Register {

	@Id
	@GeneratedValue
	private Long id;

	@NotEmpty
	@Column(nullable = false, unique = false)
	private String name;

	@CPF(message = "Invalid CPF!")
	@NotEmpty
	@Column(nullable = false, unique = true)
	private String cpf;
	
	@Email(message="Invalid E-Mail!")
	@NotEmpty
	@Column(nullable = false, unique = true)
	private String email;

	@OneToOne(mappedBy = "register", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private Address address;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

}
