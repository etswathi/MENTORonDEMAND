import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { AdminsigninService } from './adminsignin.service';

@Component({
  selector: 'app-user',
  templateUrl: './adminsignin.component.html',
  styles: []
})
export class AdminsigninComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private userService: AdminsigninService) {

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


