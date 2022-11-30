import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { JSONPlaceHolderService } from 'src/app/services/jsonplace-holder-service.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  post: Post;

  constructor(
    private jsonPlaceHolderService: JSONPlaceHolderService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.post = new Post(0, 0, '', '');
  }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params);
    const postId: number = this.activatedRoute.snapshot.params['id'];

    this.jsonPlaceHolderService.getPostById(postId).subscribe((post) => {
      console.log(post);
      this.post = post;
    });
  }

  goBack(): void {
    this.router.navigate(['/posts']);
  }
}
