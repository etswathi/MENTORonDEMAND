import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { MentorviewtrainingService } from './mentorviewtraining.service';
import { Skill } from '../models/skill.model';
import { Payment } from '../models/payment.model';

@Component({
  selector: 'app-training',
  templateUrl: './mentort1.component.html',

})
export class Mentort1Component implements OnInit {
  trainings: Training[];
  skills: Skill[];
  payments: Payment[];
  

  constructor(private router: Router, private viewtrainingService: MentorviewtrainingService) {

  }

  ngOnInit() {
    this.viewtrainingService.getTraining()
      .subscribe( data => {
        this.trainings = data;
      }
      )
  };
      
  getPayby(trainingsId) {
    this.viewtrainingService.getPayby(trainingsId)
    .subscribe(data => {
      this.payments = data;
      console.log(this.payments);
      sessionStorage.setItem('user1Payments', JSON.stringify(this.payments))
      this.router.navigateByUrl('payby')
    });
  }







  
  getSkil(trainingsId) {
    this.viewtrainingService.getSkil(trainingsId)
    .subscribe(data => {
      this.skills = data;
      console.log(this.skills);
      sessionStorage.setItem('userSkills', JSON.stringify(this.skills))
      this.router.navigateByUrl('skillm')
    });
  }

}
