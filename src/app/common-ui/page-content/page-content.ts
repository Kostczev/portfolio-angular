import { Project } from './../../data/interface/data.interface';
import { DataService } from './../../data/services/data.services';
import { Component, OnInit } from '@angular/core';
import { Job } from '../../data/interface/data.interface';
import { WorkHistory } from "../work-history/work-history";
import { StickyObserverDirective } from "../../directive/sticky-observer.directive";
import { ProjectCard } from "../project-card/project-card";
import { Hero } from "../hero/hero";

@Component({
  selector: 'app-page-content',
  imports: [WorkHistory, StickyObserverDirective, ProjectCard, Hero],
  templateUrl: './page-content.html',
  styleUrl: './page-content.scss'
})
export class PageContent implements OnInit {
  jobs: Job[] = []
  projects: Project[] = []

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.jobs = this.dataService.jobs
    this.projects = this.dataService.projects
  }


}
