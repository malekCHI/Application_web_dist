package com.microservice.micro_forum.services;


import com.microservice.micro_forum.entities.Comment;
import com.microservice.micro_forum.entities.Post;
import com.microservice.micro_forum.repositories.CommentRepository;
import com.microservice.micro_forum.repositories.PostRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CommentService implements IcommentService {

    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private PostRepository postRepository ;
    @Autowired
    private PostService postService;
    @Override
    public ResponseEntity<?> addComment(Long postId, Comment comment) {
        try {
            Post post = postRepository.findById(postId).orElse(null);

            if (post == null) {
                return ResponseEntity.badRequest().body("Post Doesn't Exists");
            }

            comment.setPost(post);
            Comment savedComment = commentRepository.save(comment);

            return ResponseEntity.ok(savedComment);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving comment");
        }
    }
    @Override
    public ResponseEntity<?> updateComment(Long id, Comment Updatedcomment) {
        try {
            Comment existingcomment= commentRepository.findById(id).orElse(null);
            if(existingcomment == null)
            {
                return ResponseEntity.badRequest().body("Comment Doesn't Exists");
            }
            existingcomment.setContent(Updatedcomment.getContent());

            Comment comment1 =commentRepository.save(existingcomment);
            return  ResponseEntity.ok(comment1);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating Comment");
        }
    }
    @Override
    public ResponseEntity<?> supprimerComment(Long id) {
        try{
            Comment comment= commentRepository.findById(id).orElse(null);

            if(comment == null)
            {
                return ResponseEntity.badRequest().body("Comment Doesn't Exists");
            }
            commentRepository.deleteById(id);
            List<Comment> comments = commentRepository.findAll();
            return  ResponseEntity.ok(comments);
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error Deleting Comment");
        }
    }
    @Override
    public ResponseEntity<?> retrieveCommentById(Long id) {
        try{
            Comment comment= commentRepository.findById(id).orElse(null);

            if(comment == null)
            {
                return ResponseEntity.badRequest().body("Comment Doesn't Exists");
            }
            return  ResponseEntity.ok(comment);
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error Retrieving Comment");
        }
    }

    @Override
    public ResponseEntity<?> retrieveCommentByPost(Long id) {
        Optional<Post> postOptional = postService.findWithCommentsById(id);
        if (!postOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        Post post = postOptional.get();
        return ResponseEntity.ok(post.getComments());
    }

}
