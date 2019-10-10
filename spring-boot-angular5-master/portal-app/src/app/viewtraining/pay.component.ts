import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { ViewtrainingService } from './viewtraining.service';
import { Payment } from '../models/payment.model';

@Component({
  selector: 'app-training',
  templateUrl: './pay.component.html',
  styleUrls: ['./viewtraining.component.css']
})
export class PayComponent implements OnInit {
  trainings: Training[];
  payments: Payment[];
  

  constructor(private router: Router, private viewtrainingService: ViewtrainingService) {

  }

  ngOnInit() {
    this.viewtrainingService.getTraining()
      .subscribe( data => {
        this.trainings = data;
      });
      this.viewtrainingService.getPayment()
      .subscribe( data => {
        this.payments = data;
      });
  

    };
  }

  
