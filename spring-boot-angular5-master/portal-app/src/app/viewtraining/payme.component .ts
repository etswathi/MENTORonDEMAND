import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { ViewtrainingService } from './viewtraining.service';
import { Payment } from '../models/payment.model';

@Component({
  selector: 'app-training',
  templateUrl: './payme.component.html',
  styleUrls: ['./viewtraining.component.css']
})
export class PaymeComponent implements OnInit {
  trainings: Training = new Training();
  payments: Payment[];
  paymentService: any;
  userpayments: Payment[];

  constructor(private router: Router, private viewtrainingService: ViewtrainingService) {

  }

  ngOnInit() {
    this.userpayments = JSON.parse(sessionStorage.getItem('userPayments'));
    console.log(this.userpayments);
    

      // this.viewtrainingService.getPaymentby(this.trainings.id)
      //   .subscribe( data => {

      //     this.payments = data;
      //   });
      };
  

    
  }

  
