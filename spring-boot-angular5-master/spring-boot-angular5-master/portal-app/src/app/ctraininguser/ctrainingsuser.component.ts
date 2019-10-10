import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { CtrainingsuserService } from './ctrainingsuser.service';

@Component({
  selector: 'app-ctrainingsuser',
  templateUrl: './ctrainingsuser.component.html',
  styles: []
})
export class CtrainingsuserComponent implements OnInit {
  [x: string]: any;

  users: User[];

  constructor(private router: Router, private ctrainingsuserService: CtrainingsuserService) {

  }

  ngOnInit() {
    this.ctrainingsuserService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.ctrainingsuser.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


