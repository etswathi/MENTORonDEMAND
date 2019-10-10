import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { AdminlandService } from './adminland.service';

@Component({
  selector: 'app-adminland',
  templateUrl: './adminland.component.html',
  styles: []
})
export class AdminlandComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private adminlandService: AdminlandService) {

  }

  ngOnInit() {
    this.adminlandService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.adminlandService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


