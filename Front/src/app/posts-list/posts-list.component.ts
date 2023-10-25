import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: any[] = [];

  newPostForm: FormGroup;

  constructor(private postService: PostService, private fb: FormBuilder) {
    this.newPostForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  addPost() {
    if (this.newPostForm.valid) {
      const newPost = this.newPostForm.value;
      this.postService.addDep(newPost).subscribe(post => {
        // Add the new post to the list
        this.posts.push(post);

        // Reset the form
        this.newPostForm.reset();
      });
    }
  }
  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

}
