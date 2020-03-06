import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { PassDataService } from 'src/app/services/pass-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentModel } from './comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  postId : number;
  commentsArray;
  commentForm : FormGroup;
  newComment : CommentModel;

  constructor(private posts : PostsService,
              private passData : PassDataService) { 
                this.passData.emitter.subscribe(response => {
                this.postId = response;
                console.log('Post Id: ' +this.postId);
              });}

  ngOnInit(): void {
    this.posts.onFetchComments(this.postId).subscribe(response => {
      this.commentsArray = response;
      console.log(this.commentsArray);
    });
    this.commentForm = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'body' : new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    this.newComment = new CommentModel(
      this.postId, 
      this.commentsArray.length + 1, 
      this.commentForm.value.name,
      this.commentForm.value.email,
      this.commentForm.value.body
    );
    console.log(this.newComment);
    this.commentsArray.push(this.newComment);
  }
}
