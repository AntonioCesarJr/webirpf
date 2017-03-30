package br.com.w3sis.webirpf.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.validator.constraints.NotEmpty;

@Entity
public class UserApp {

	public UserApp() {

	}

	public UserApp(Long id, String email) {
		super();
		this.id = id;
		this.email = email;
	}

	@Id
	@GeneratedValue
	private Long id;

	@NotEmpty
	@Column(nullable = false, unique = true)
	private String email;

	@NotEmpty
	@Column(nullable = false)
	private String passwd;

	public String getEmail() {
		return email;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPasswd() {
		return passwd;
	}

	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}

}
