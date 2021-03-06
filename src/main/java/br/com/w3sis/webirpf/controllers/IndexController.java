package br.com.w3sis.webirpf.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class IndexController {

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index() {
		return "index";
	}

	@RequestMapping(value = "/login-form", method = RequestMethod.GET)
	public String login() {
		return "index";
	}

	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public String register() {
		return "index";
	}

	@RequestMapping(value = "/book", method = RequestMethod.GET)
	public String book() {
		return "index";
	}
}
