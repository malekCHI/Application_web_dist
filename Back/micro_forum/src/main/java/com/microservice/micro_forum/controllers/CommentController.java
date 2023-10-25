package com.microservice.micro_forum.controllers;


import com.microservice.micro_forum.entities.Comment;
import com.microservice.micro_forum.services.IcommentService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins ="http://localhost:4200")
@RestController
@RequestMapping("/comment")
@AllArgsConstructor
public class CommentController {
    private final IcommentService icommentService ;


    @PostMapping("/addcomment/{id}")
    private ResponseEntity<?> create(@RequestBody Comment comment, @PathVariable Long id)
    {
        return icommentService.addComment(id, comment);
    }
    @PutMapping("/updatecomment/{id}")
    private ResponseEntity<?> updtae(@RequestBody Comment comment, @PathVariable Long id)
    {
        return icommentService.updateComment(id,comment);
    }
    @GetMapping("/retrieve/{id}")
    private ResponseEntity<?> retrieve(@PathVariable Long id)
    {
        return icommentService.retrieveCommentById(id);
    }
    @DeleteMapping("/deletepost/{id}")
    private ResponseEntity<?> delete(@PathVariable Long id)
    {
        return icommentService.supprimerComment(id);
    }
}

