package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/hello"})
public class HelloWorld {
	@RequestMapping({"/print"})
	public String greetHello()
	{
		return "Hello Greet";
	}

}
