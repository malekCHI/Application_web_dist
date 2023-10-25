package com.microservice.micro_forum.services;


import com.microservice.micro_forum.entities.Post;
import com.microservice.micro_forum.entities.RatingAction;
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
public class PostService implements IpostService {

    @Autowired
    private PostRepository postRepository;
    @Override
    public ResponseEntity<?> addPost(Post post) {
        try
        {
            Post dep =postRepository.save(post);
            return  ResponseEntity.ok(dep);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving post");
        }
    }

    @Override
    public ResponseEntity<?> updatePost(Long id, Post updatedPost) {
        try {
            Post existingPost = postRepository.findById(id).orElse(null);

            if (existingPost == null) {
                return ResponseEntity.badRequest().body("Post Doesn't Exists");
            }

            existingPost.setTitle(updatedPost.getTitle());
            existingPost.setContent(updatedPost.getContent());

            Post savedPost = postRepository.save(existingPost);
            return ResponseEntity.ok(savedPost);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating Post");
        }
    }


    @Override
    public ResponseEntity<?> supprimerPost(Long id) {
        try{
            Post post= postRepository.findById(id).orElse(null);

            if(post == null)
            {
                return ResponseEntity.badRequest().body("Post Doesn't Exists");
            }
            postRepository.deleteById(id);
            List<Post> posts = postRepository.findAll();
            return  ResponseEntity.ok(posts);
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error Deleting Post");
        }
    }

    @Override
    public ResponseEntity<?> retrievePost() {
        try{
            List<Post> posts = postRepository.findAll();
            return  ResponseEntity.ok(posts);
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error Retrieving Post");
        }
    }

    @Override
    public ResponseEntity<?> retrievePostById(Long id) {
        try{
            Post post= postRepository.findById(id).orElse(null);

            if(post == null)
            {
                return ResponseEntity.badRequest().body("Post Doesn't Exists");
            }
            return  ResponseEntity.ok(post);
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error Retrieving Post");
        }
    }

    @Override
    public Optional<Post> findWithCommentsById(Long id) {
        return postRepository.findById(id);

    }

    @Override
    public ResponseEntity<?> ratePost(Long postId, RatingAction action) {
        try {
            Post post = postRepository.findById(postId).orElse(null);

            if (post == null) {
                return ResponseEntity.badRequest().body("Post Doesn't Exist");
            }

            switch (action) {
                case UPVOTE:
                    post.setRating(post.getRating() + 1);
                    break;
                case DOWNVOTE:
                    post.setRating(post.getRating() - 1);
                    break;
            }

            postRepository.save(post);

            return ResponseEntity.ok(post);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating post rating");
        }
    }

}
