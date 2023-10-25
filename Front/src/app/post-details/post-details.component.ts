import { CommentService } from './../services/comment.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../model/post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post:any | Post;
  comments:any| Comment[] = [];
  commentForm: FormGroup;


  constructor(private route: ActivatedRoute, private postService: PostService,private CommentService: CommentService,    private fb: FormBuilder
    ) { 
      this.commentForm = this.fb.group({
        content: ['', Validators.required]
      });
    }

 

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const postId = id ? +id : 0;  
  
    this.postService.getpost(postId).subscribe(post => {
      this.post = post;
  
      this.CommentService.getCommentById(postId).subscribe(comments => {
        this.comments = comments;
      });
    });
  }

  addComment() {
    if (this.commentForm.valid) {
      const newComment = this.commentForm.value;
      this.CommentService.addCommentToPost(this.post.id, newComment).subscribe(comment => {
        // Add the new comment to the list
        this.comments.push(comment);

        // Reset the form
        this.commentForm.reset();
      });
    }
  }
  

  

}
