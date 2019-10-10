import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { AdminsigninService } from './adminsignin.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './adminsignin.component.html',
  styles: []
})
export class AdminsigninComponent implements OnInit {

  mentors: Mentor[];
  Mentor: Mentor = new Mentor();

  constructor(private router: Router, private mentorService: AdminsigninService) {

  }

  ngOnInit() {
    this.mentorService.getMentors()
      .subscribe( data => {
        this.mentors = data;
      });
  };

  deleteUser(mentor: Mentor): void {
    this.mentorService.deleteMentor(mentor)
      .subscribe( data => {
        this.mentors = this.mentors.filter(u => u !== mentor);
      })
  };
  validate(userName, password): void{
    this.mentorService.validate(userName,password).subscribe(data =>{
      if(data==null){
        alert("Invalid Username or Password!");
      }
      else if(!data.active){
        alert("mentor is blocked!!");
      }
    
        else{
          
          sessionStorage.setItem('id',data.id);
        this.router.navigate(['/adminland']);
      }
    })
  };


}


