import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http : HttpClient) { }

  onFetchPost(id : number) : Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' +id);
  }

  onFetchPosts(id : number) : Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=' +id);
  }

  onFetchComments(id : number) : Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' +id);
  }
}
