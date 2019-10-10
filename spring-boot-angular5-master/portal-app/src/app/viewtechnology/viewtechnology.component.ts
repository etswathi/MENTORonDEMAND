import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Technology } from '../models/technology.model';
import { ViewtechnologyService } from './viewtechnology.service';

@Component({
  selector: 'app-technology',
  templateUrl: './viewtechnology.component.html',
  styleUrls: ['./viewtechnology.component.css']
})
export class ViewtechnologyComponent implements OnInit {

  technologies: Technology[];

  constructor(private router: Router, private technologyService: ViewtechnologyService) {

  }

  ngOnInit() {
    this.technologyService.getTechnology()
      .subscribe( data => {
        this.technologies = data;
      });
  };

  deleteTechnology(technology: Technology): void {
    this.technologyService.deleteTechnology(technology)
      .subscribe( data => {
        this.technologies = this.technologies.filter(u => u !== technology);
      })
  };

}


