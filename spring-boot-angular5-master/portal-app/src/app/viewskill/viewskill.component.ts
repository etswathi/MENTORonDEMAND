import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Skill } from '../models/skill.model';
import { ViewskillService } from './viewskill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './viewskill.component.html',
  styleUrls: ['./viewskill.component.css']
})
export class ViewskillComponent implements OnInit {

  skills: Skill[];

  constructor(private router: Router, private skillService: ViewskillService) {

  }

  ngOnInit() {
    this.skillService.getSkill()
      .subscribe( data => {
        this.skills = data;
      });
  };

  deleteSkill(skill: Skill): void {
    this.skillService.deleteSkill(skill)
      .subscribe( data => {
        this.skills = this.skills.filter(u => u !== skill);
      })
  };

}


