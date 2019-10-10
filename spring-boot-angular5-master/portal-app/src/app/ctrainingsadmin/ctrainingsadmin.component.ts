import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { CtrainingsadminService } from './ctrainingsadmin.service';

@Component({
  selector: 'app-ctrainingsadmin',
  templateUrl: './ctrainingsadmin.component.html',
  styles: []
})
export class CtrainingsadminComponent implements OnInit {
  [x: string]: any;

  users: User[];

  constructor(private router: Router, private ctrainingsadminService: CtrainingsadminService) {

  }

  ngOnInit() {
    this.ctrainingsadminService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.ctrainingsadmin.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


