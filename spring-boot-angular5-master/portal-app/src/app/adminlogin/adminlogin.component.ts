import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { AdminloginService } from './adminlogin.service';

@Component({
  selector: 'app-user',
  templateUrl: './adminlogin.component.html',
  styles: []
})
export class AdminloginComponent implements OnInit {

  users: User[];
  

  constructor(private router: Router, private userService:  AdminloginService) {

  }

  ngOnInit() {
    
      }
      validate(userName, password): void{
    
        if(userName=="admin" || password=="admin123"){
          this.router.navigate(['admin1land']);
          
        }
        else {
          alert("Invalid Username or Password!");
        }
    }
  };

  

 






