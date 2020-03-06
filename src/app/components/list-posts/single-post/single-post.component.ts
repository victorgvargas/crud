import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { PassDataService } from 'src/app/services/pass-data.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  postId : number;
  fullPost; // Complete post retrieved

  constructor(private posts : PostsService,
              private route : ActivatedRoute,
              private passData : PassDataService) {
                this.postId = this.route.snapshot.params['postId'];
               }

  ngOnInit(): void {
    this.posts.onFetchPost(this.postId).subscribe(response => 
      {
        this.fullPost = response;
      });
    this.passData.emitter.next(this.postId);
  }

}
