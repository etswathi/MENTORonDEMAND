import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { MentorviewtrainingService } from './mentorviewtraining.service';
import { Payment } from '../models/payment.model';

@Component({
  selector: 'app-training',
  templateUrl: './payby.component.html',

})
export class PaybyComponent implements OnInit {
  trainings: Training = new Training();
  payments: Payment[];
  paymentService: any;
  user1payments: Payment[];
  

  constructor(private router: Router, private viewtrainingService: MentorviewtrainingService) {

  }

  ngOnInit() {
    this.user1payments = JSON.parse(sessionStorage.getItem('user1Payments'));
    console.log(this.user1payments);
    

      
      };
  

 


}

 



