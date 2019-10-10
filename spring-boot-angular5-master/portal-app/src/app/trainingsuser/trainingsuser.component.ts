import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { TrainingsuserService } from './trainingsuser.service';

@Component({
  selector: 'app-trainingsuser',
  templateUrl: './trainingsuser.component.html',
  styles: []
})
export class TrainingsuserComponent implements OnInit {
  [x: string]: any;

  users: User[];

  constructor(private router: Router, private trainingsuserService: TrainingsuserService) {

  }

  ngOnInit() {
    this.trainingsuserService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.trainingsuser.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


