package tn.esprit.microexam;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class MicroExamApplication {

    public static void main(String[] args) {
        SpringApplication.run(MicroExamApplication.class, args);
    }

}
