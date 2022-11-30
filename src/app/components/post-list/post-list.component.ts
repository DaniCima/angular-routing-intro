import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { JSONPlaceHolderService } from 'src/app/services/jsonplace-holder-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts: Post[];

  constructor(private jsonPlaceHolderService: JSONPlaceHolderService) {
    this.posts = [];
  }

  ngOnInit(): void {
    this.jsonPlaceHolderService.getPosts().subscribe((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }
}
