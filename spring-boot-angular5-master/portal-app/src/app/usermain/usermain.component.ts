import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UsermainService } from './usermain.service';

@Component({
  selector: 'app-usermain',
  templateUrl: './usermain.component.html',
  styles: []
})
export class UsermainComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private usermainService: UsermainService) {

  }

  ngOnInit() {
    this.usermainService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.usermainService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


