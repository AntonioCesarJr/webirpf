package br.com.w3sis.webirpf;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration
public class WebIRPFApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebIRPFApplication.class, args);
	}
}
