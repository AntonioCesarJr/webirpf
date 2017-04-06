package br.com.w3sis.webirpf;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import br.com.w3sis.webirpf.services.UserAppService;

@SpringBootApplication
@EnableAutoConfiguration
public class WebIRPFApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebIRPFApplication.class, args);
	}

	@Configuration
	@Order(SecurityProperties.DEFAULT_FILTER_ORDER)
	protected static class SecurityConfiguration extends WebSecurityConfigurerAdapter {

		@Autowired
		UserAppService userAppService;

		@Override
		protected void configure(HttpSecurity http) throws Exception {
			http.httpBasic().and().authorizeRequests().antMatchers("/").permitAll().antMatchers("/partial/login-form**")
					.permitAll().antMatchers("/partial/home.html").permitAll().antMatchers("/partial/register.html")
					.permitAll().antMatchers("/resources/**").permitAll().antMatchers("/validateregister").permitAll()
					.anyRequest().authenticated().and().formLogin().loginPage("/").and().logout()
					.logoutRequestMatcher(new AntPathRequestMatcher("/logout")).and().csrf()
					.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
		}

		@Override
		protected void configure(AuthenticationManagerBuilder auth) throws Exception {
			auth.userDetailsService(userAppService).passwordEncoder(new BCryptPasswordEncoder());
		}
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/register").allowedOrigins("https://viacep.com.br");
			}
		};
	}
}
