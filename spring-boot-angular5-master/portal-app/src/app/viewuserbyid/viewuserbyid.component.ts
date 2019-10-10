import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { ViewuserbyidService } from './viewuserbyid.service';

@Component({
  selector: 'app-training',
  templateUrl: './viewuserbyid.component.html',
  styleUrls: ['./viewuserbyid.component.css']
})
export class ViewuserbyidComponent implements OnInit {
  trainings: Training[];

  constructor(private router: Router, private viewuserbyidService: ViewuserbyidService) {

  }

  ngOnInit() {
    this.viewuserbyidService.getTraining()
      .subscribe( data => {
        this.trainings = data;
      });
  };

 


}
