import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { MentorviewtrainingService } from './mentorviewtraining.service';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-training',
  templateUrl: './skillm.component.html',
  styleUrls: ['./mentorviewtraining.component.css']

})
export class SkillmComponent implements OnInit {
  trainings: Training = new Training();
  skills: Skill[];
  skillService: any;
  userskills: Skill[];
  

  constructor(private router: Router, private viewtrainingService: MentorviewtrainingService) {

  }

  ngOnInit() {
    this.userskills = JSON.parse(sessionStorage.getItem('userSkills'));
    console.log(this.userskills);
    

      
      };
  

 


}
