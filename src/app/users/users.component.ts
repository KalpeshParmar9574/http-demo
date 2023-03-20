import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  usersList: any = [];
  constructor(private userService: UserService, private router: Router) {
    
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


  onEdit(user: UserModel) {
    if (user.id) {
      this.router.navigate(['/edit-user', user.id]);
    }
  }
}
