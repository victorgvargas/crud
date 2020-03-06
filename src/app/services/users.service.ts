import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  onFetchUsers() : Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  onDeleteUser(id : number){
    return this.http.delete('https://jsonplaceholder.typicode.com/users/' +id);
  }
}
