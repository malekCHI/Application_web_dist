package com.microservice.micro_forum;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;


@EnableEurekaClient
@SpringBootApplication
public class MicroForumApplication {

    public static void main(String[] args) {
        SpringApplication.run(MicroForumApplication.class, args);
    }

}
