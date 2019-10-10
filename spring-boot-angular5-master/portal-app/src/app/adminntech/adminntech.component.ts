import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { AdminntechService } from './adminntech.service';

@Component({
  selector: 'app-user',
  templateUrl: './adminntech.component.html',
  styles: []
})
export class AdminntechComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private userService: AdminntechService) {

  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


