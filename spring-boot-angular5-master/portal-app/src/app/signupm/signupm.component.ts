import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { SignupmService } from './signupm.service';

@Component({
  selector: 'app-signupm',
  templateUrl: './signupm.component.html',
  styles: []
})
export class SignupmComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private signupmService: SignupmService) {

  }

  ngOnInit() {
    this.signupmService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.signupmService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


