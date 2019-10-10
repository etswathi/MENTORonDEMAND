import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { AdmintechService } from './admintech.service';

@Component({
  selector: 'app-admintech',
  templateUrl: './admintech.component.html',
  styles: []
})
export class AdmintechComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private admintechService: AdmintechService) {

  }

  ngOnInit() {
    this.admintechService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.admintechService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


