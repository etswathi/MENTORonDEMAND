import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UseradminService } from './useradmin.service';

@Component({
  selector: 'app-useradmin',
  templateUrl: './useradmin.component.html',
  styles: []
})
export class UseradminComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private useradminService: UseradminService) {

  }

  ngOnInit() {
    this.useradminService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.useradminService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


