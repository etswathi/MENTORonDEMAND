import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserlandService } from './userland.service';

@Component({
  selector: 'app-userland',
  templateUrl: './userland.component.html',
  styleUrls: ['./userland.component.css']
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
  findtraining(startDate,endDate):void{
    this.userlandService.findtraining(startDate,endDate).subscribe(data =>{
      if(data==null){
        alert("Invalid  search results!");
      }
      else {
        sessionStorage.setItem('sd',startDate);
        sessionStorage.setItem('ed',endDate);
  this.router.navigate(['trainingsearch']);
      
     
  }

})

  };
}
