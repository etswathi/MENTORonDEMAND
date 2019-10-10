import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { ViewtrainingService } from './viewtraining.service';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-training',
  templateUrl: './skillt.component.html',
  styleUrls: ['./viewtraining.component.css']
})
export class SkilltComponent implements OnInit {
  trainings: Training = new Training();
  skills: Skill[];
  skillService: any;
  user1skills: Skill[]

  constructor(private router: Router, private viewtrainingService: ViewtrainingService) {

  }

  
    ngOnInit() {
      this.user1skills = JSON.parse(sessionStorage.getItem('user1skills'));
      console.log(this.user1skills);
      
  
        
        };
    
  
   
  
  
  }