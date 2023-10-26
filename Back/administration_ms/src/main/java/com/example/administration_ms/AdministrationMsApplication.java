package com.example.administration_ms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

//@EnableDiscoveryClient

@SpringBootApplication
@EnableDiscoveryClient
public class AdministrationMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(AdministrationMsApplication.class, args);
	}

}
