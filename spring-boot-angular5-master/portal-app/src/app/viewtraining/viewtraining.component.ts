import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { ViewtrainingService } from './viewtraining.service';
import { Payment } from '../models/payment.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-viewtraining',
  templateUrl: './viewtraining.component.html',
  styleUrls: ['./viewtraining.component.css']
})
export class ViewtrainingComponent implements OnInit {
  payments: Payment[];
  trainings:Training[];
  skills: Skill[];



  constructor(private router: Router, private viewtrainingService: ViewtrainingService) {

  }

  ngOnInit() {
    this.viewtrainingService.getTraining().subscribe(data => {
      this.trainings = data;
    }
      )
  };

  getPaymentby(trainingsId) {
    this.viewtrainingService.getPaymentby(trainingsId)
    .subscribe(data => {
      this.payments = data;
      console.log(this.payments);
      sessionStorage.setItem('userPayments', JSON.stringify(this.payments))
      this.router.navigateByUrl('payme')
    });
  }


getSkil(trainingsId) {
  this.viewtrainingService.getSkil(trainingsId)
  .subscribe(data => {
    this.skills = data;
    console.log(this.skills);
    sessionStorage.setItem('user1skills', JSON.stringify(this.skills))
    this.router.navigateByUrl('skillt')
  });
}

}