import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  usersArray; // Array containing all the users

  constructor(private users : UsersService) { }

  ngOnInit(): void {
    this.users.onFetchUsers().subscribe(response => 
      {
        this.usersArray = response;
      })
  }

  onDelete(id : number, index : number){
    this.users.onDeleteUser(id).subscribe(() => {
      this.usersArray.splice(index,1);
    });
  }
}
