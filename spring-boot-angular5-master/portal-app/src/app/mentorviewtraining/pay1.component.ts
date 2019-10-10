import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { MentorviewtrainingService } from './mentorviewtraining.service';
import { Payment } from '../models/payment.model';

@Component({
  selector: 'app-training',
  templateUrl: './pay1.component.html',
  styleUrls: ['./mentorviewtraining.component.css']
  

})
export class Pay1Component implements OnInit {
  trainings: Training[];
  payments: Payment[];
  

  constructor(private router: Router, private viewtrainingService: MentorviewtrainingService) {

  }

  ngOnInit() {
    this.viewtrainingService.getTraining()
      .subscribe( data => {
        this.trainings = data;
      });
      this.viewtrainingService.getPay()
      .subscribe( data => {
        this.payments = data;
      });
  

    };
  }


 



