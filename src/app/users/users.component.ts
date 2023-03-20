import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  usersList: any = [];
  constructor(private userService: UserService) {
    
  }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((response) => {
      debugger
      if (response && response.length > 0) {
        this.usersList = response || []; 
      }
    })
  }



}
