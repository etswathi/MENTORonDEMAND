import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { SigninService } from './signin.service';
import { Training } from '../models/training.model';

@Component({
  selector: 'app-user',
  templateUrl: './signin.component.html',
  styles: []
})
export class SigninComponent implements OnInit {

  users: User[];
  user: User = new User();
  training:Training[];

  constructor(private router: Router, private userService: SigninService) {

  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })


  };

  validate(userName, password): void{
    this.userService.validate(userName,password).subscribe(data =>{
      if(data==null){
        alert("Invalid Username or Password!");
      }
      else if(!data.active){
        alert("user is blocked!!");
      }
      else{
        sessionStorage.setItem('loggedinuser',JSON.stringify(data));
        sessionStorage.setItem('id',data.id);
        this.router.navigate(['userland']);
      }
    })
  };

findtraining(startDate,endDate):void{
  this.userService.findtraining(startDate,endDate).subscribe(data =>{
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

