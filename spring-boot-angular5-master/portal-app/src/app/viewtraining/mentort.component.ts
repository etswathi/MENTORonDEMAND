import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { ViewtrainingService } from './viewtraining.service';

@Component({
  selector: 'app-training',
  templateUrl: './mentort.component.html',
  styleUrls: ['./viewtraining.component.css']
  
})
export class MentortComponent implements OnInit {
  trainings: Training[];
  

  constructor(private router: Router, private viewtrainingService: ViewtrainingService) {

  }

  ngOnInit() {
    this.viewtrainingService.getTraining()
      .subscribe( data => {
        this.trainings = data;
      });
  };

 


}
