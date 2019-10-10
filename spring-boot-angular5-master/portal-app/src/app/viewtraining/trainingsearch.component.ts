import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { ViewtrainingService } from './viewtraining.service';
import { SigninService } from '../signin/signin.service';

@Component({
  selector: 'app-viewtraining',
  templateUrl: './trainingsearch.component.html',
  styleUrls: ['./viewtraining.component.css']
})
export class TrainingsearchComponent implements OnInit {
  trainings: Training[];
  

  constructor(private router: Router, private viewtrainingService: ViewtrainingService,private signinService:SigninService ) {

  }

  ngOnInit() {
    this.viewtrainingService.getTrainingstartendDate()
      .subscribe( data => {
        this.trainings = data;
      });
  };

 
  settraining(tr): void {
    var loggedInUser = JSON.parse(sessionStorage.getItem('loggedinuser'));
    if (loggedInUser == null) {
      alert("please log In")
      this.router.navigateByUrl('/signin')

    }
    else {
      loggedInUser.trainingId=tr.id;
      this.signinService.enrollUser(loggedInUser)
        .subscribe(data => {
          console.log(data);
          

        })
        alert("You are Enrolled for the course!")
    }
  };


}
