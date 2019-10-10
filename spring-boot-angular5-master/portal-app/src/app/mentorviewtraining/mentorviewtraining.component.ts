import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import {  MentorviewtrainingService } from './mentorviewtraining.service';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-mentorviewtraining',
  templateUrl: './mentorviewtraining.component.html',
  styleUrls: ['./mentorviewtraining.component.css']

})
export class MentorviewtrainingComponent  implements OnInit {
  trainings: Training[];
  skills: Skill[];
  

  constructor(private router: Router, private mentorviewtrainingService: MentorviewtrainingService ) {

  }

  ngOnInit() {
    this.mentorviewtrainingService.getTraining()
      .subscribe( data => {
        this.trainings = data;
      });
  };

 



}
