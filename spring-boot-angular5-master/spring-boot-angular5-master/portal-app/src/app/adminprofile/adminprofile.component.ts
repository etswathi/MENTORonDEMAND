import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { AdminprofileService } from './adminprofile.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styles: []
})
export class AdminprofileComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private adminprofileService: AdminprofileService) {

  }

  ngOnInit() {
    this.adminprofileService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.adminprofileService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


