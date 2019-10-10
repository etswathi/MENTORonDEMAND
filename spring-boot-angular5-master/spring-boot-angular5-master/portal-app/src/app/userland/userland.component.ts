import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserlandService } from './userland.service';

@Component({
  selector: 'app-userland',
  templateUrl: './userland.component.html',
  styles: []
})
export class UserlandComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private userlandService: UserlandService) {

  }

  ngOnInit() {
    this.userlandService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.userlandService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


