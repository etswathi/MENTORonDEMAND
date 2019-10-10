import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { MentorviewtrainingService } from './mentorviewtraining.service';

@Component({
  selector: 'app-training',
  templateUrl: './tech.component.html',

})
export class TechComponent implements OnInit {
  trainings: Training[];
  

  constructor(private router: Router, private viewtrainingService: MentorviewtrainingService) {

  }

  ngOnInit() {
    this.viewtrainingService.getTraining()
      .subscribe( data => {
        this.trainings = data;
      });
  };

 


}
