package com.example.formation_cours_microservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class FormationCoursMicroserviceApplication {

    public static void main(String[] args) {
        SpringApplication.run(FormationCoursMicroserviceApplication.class, args);
    }

}
