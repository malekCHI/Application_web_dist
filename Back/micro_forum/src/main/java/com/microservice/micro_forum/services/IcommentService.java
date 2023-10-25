package com.microservice.micro_forum.services;

import com.microservice.micro_forum.entities.Comment;
import org.springframework.http.ResponseEntity;

public interface IcommentService {
    ResponseEntity<?> addComment(Long postId, Comment comment);
    ResponseEntity<?> updateComment(Long id, Comment comment);
    ResponseEntity<?>  supprimerComment(Long id);

    ResponseEntity<?>  retrieveCommentById(Long id);
    ResponseEntity<?>  retrieveCommentByPost(Long id);
}
