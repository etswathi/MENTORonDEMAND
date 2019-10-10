import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { Admin1landService } from './admin1land.service';

@Component({
  selector: 'app-admin1land',
  templateUrl: './admin1land.component.html',
  styles: []
})
export class Admin1landComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private admin1landService: Admin1landService) {

  }

  ngOnInit() {
    this.admin1landService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.admin1landService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


