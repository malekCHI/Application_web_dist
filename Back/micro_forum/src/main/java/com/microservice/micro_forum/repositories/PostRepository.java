package com.microservice.micro_forum.repositories;

import com.microservice.micro_forum.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {


}