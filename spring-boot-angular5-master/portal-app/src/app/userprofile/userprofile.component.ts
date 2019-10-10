import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import {UserprofileService } from './userprofile.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  

 
  users: User[];
  user : User = new User();


  constructor(private router: Router, private UserprofileService: UserprofileService) {

  }

  ngOnInit() {
    this.UserprofileService.getUser()
      .subscribe( data => {
        this.user = data;
      });
  };

  deleteUser(user: User): void {
    this.UserprofileService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


