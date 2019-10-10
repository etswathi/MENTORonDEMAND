import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { AdminprofileService } from './adminprofile.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styles: []
})
export class AdminprofileComponent implements OnInit {

  mentors: Mentor[];
  mentor : Mentor = new Mentor();


  constructor(private router: Router, private adminprofileService: AdminprofileService) {

  }

  ngOnInit() {
    this.adminprofileService.getMentor()
      .subscribe( data => {
        alert(data);
        this.mentor = data;
      });
  };

  deleteMentor(mentor: Mentor): void {
    this.adminprofileService.deleteMentor(mentor)
      .subscribe( data => {
        this.mentors = this.mentors.filter(u => u !== mentor);
      })
  };

}


