import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Technology } from '../models/technology.model';
import { TechnologyService } from './technology.service';

@Component({
  templateUrl: './add-technology.component.html',
  styleUrls:   ['./technology.component.css']
})
export class AddTechnologyComponent {

  technologies: Technology = new Technology();

  constructor(private router: Router, private technologyService: TechnologyService) {

  }

  createTechnology(): void {
    this.technologyService.createTechnology(this.technologies)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };

}
