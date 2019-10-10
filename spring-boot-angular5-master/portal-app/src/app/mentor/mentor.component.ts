import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { MentorService } from './mentor.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  
  
})
export class MentorComponent implements OnInit {

  mentors: Mentor[];

  constructor(private router: Router, private mentorService: MentorService) {

  }

  ngOnInit() {
    //this.mentorService.getMentor()
      //.subscribe( data => {
      //  this.mentors = data;
    //  });
    this.mentorService.activeData().subscribe(data=>{
      this.mentors = data;
    })
  };
  

  deleteMentor(mentor: Mentor): void {
    this.mentorService.deleteMentor(mentor)
      .subscribe( data => {
        this.mentors = this.mentors.filter(u => u !== mentor);
      })
  };

}


