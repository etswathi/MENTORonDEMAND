import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-user',
  templateUrl: './signin.component.html',
  styles: []
})
export class SigninComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private userService: SigninService) {

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


