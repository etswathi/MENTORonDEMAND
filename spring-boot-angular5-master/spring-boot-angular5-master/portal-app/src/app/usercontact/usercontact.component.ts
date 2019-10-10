import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UsercontactService } from './usercontact.service';

@Component({
  selector: 'app-usercontact',
  templateUrl: './usercontact.component.html',
  styles: []
})
export class UsercontactComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private usercontactService: UsercontactService) {

  }

  ngOnInit() {
    this.usercontactService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.usercontactService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


