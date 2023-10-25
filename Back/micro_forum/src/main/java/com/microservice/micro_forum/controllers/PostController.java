package com.microservice.micro_forum.controllers;


import com.microservice.micro_forum.entities.Post;
import com.microservice.micro_forum.entities.RatingAction;
import com.microservice.micro_forum.services.IpostService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins ="http://localhost:4200")
@RestController
@RequestMapping("/post")
@AllArgsConstructor
public class PostController {

    private final IpostService ipostService ;


    @PostMapping("/addpost")
    private ResponseEntity<?> create(@RequestBody Post post)
    {
        return ipostService.addPost(post);
    }
    @PutMapping("/updatepost/{id}")
    private ResponseEntity<?> updtae(@RequestBody Post post, @PathVariable Long id)
    {
        return ipostService.updatePost(id,post);
    }
    @GetMapping("/retrieve/{id}")
    private ResponseEntity<?> retrieve(@PathVariable Long id)
    {
        return ipostService.retrievePostById(id);
    }
    @GetMapping("/retrieve")
    private ResponseEntity<?> retrieveAll()
    {
        return ipostService.retrievePost();
    }
    @DeleteMapping("/deletepost/{id}")
    private ResponseEntity<?> delete(@PathVariable Long id)
    {
        return ipostService.supprimerPost(id);
    }
    @PostMapping("/{postId}/rate")
    public ResponseEntity<?> ratePost(@PathVariable Long postId, @RequestBody RatingAction action) {
        return ipostService.ratePost(postId, action);
    }

}

