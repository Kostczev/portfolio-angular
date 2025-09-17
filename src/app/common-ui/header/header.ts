import { DataService } from './../../data/services/data.services';
import { Component, OnInit } from '@angular/core';
import { SocialLinks } from "../social-links/social-links";
import { Skill } from '../../data/interface/data.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [SocialLinks],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  skills: Skill[] = []
  learnedSkills: Skill[] = []
  
  constructor(private dataService: DataService, private router: Router) {}

  navigateToAnchor(route: string, anchor: string) {
    this.router.navigate([route], { fragment: anchor });
  }

  ngOnInit(): void {
    this.skills = this.dataService.skills
    this.learnedSkills = this.dataService.learnedSkills
  }
}
