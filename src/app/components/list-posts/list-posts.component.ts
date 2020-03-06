import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {
  postsArray = [];
  id : number;

  constructor(private posts : PostsService,
              private route : ActivatedRoute) { 
                this.id = this.route.snapshot.params['id'];
              }

  ngOnInit() {
    this.posts.onFetchPosts(this.id).subscribe(response => 
      {
        this.postsArray = response; 
        console.log(this.postsArray);
      }
    );
  }

}
