import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { AdminpayService } from './adminpay.service';

@Component({
  selector: 'app-adminpay',
  templateUrl: './adminpay.component.html',
  styles: []
})
export class AdminpayComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private adminpayService: AdminpayService) {

  }

  ngOnInit() {
    this.adminpayService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.adminpayService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


