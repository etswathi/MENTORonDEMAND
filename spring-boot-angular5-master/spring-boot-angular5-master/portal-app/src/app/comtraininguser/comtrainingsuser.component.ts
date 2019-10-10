import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { ComtrainingsuserService } from './comtrainingsuser.service';

@Component({
  selector: 'app-comtrainingsuser',
  templateUrl: './comtrainingsuser.component.html',
  styles: []
})
export class ComtrainingsuserComponent implements OnInit {
  [x: string]: any;

  users: User[];

  constructor(private router: Router, private comtrainingsuserService: ComtrainingsuserService) {

  }

  ngOnInit() {
    this.comtrainingsuserService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.comtrainingsuser.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


