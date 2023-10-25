package com.microservice.micro_forum.services;


import com.microservice.micro_forum.entities.Post;
import com.microservice.micro_forum.entities.RatingAction;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

public interface IpostService {
    ResponseEntity<?> addPost(Post post);
    ResponseEntity<?> updatePost(Long id, Post post);
    ResponseEntity<?>  supprimerPost(Long id);
    ResponseEntity<?>  retrievePost();
    ResponseEntity<?>  retrievePostById(Long id);
    Optional<Post> findWithCommentsById(Long id);

    ResponseEntity<?> ratePost(Long postId, RatingAction action);
}
