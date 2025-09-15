import { Component, input } from '@angular/core';
import { Project } from '../../data/interface/data.interface';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {
  project = input<Project>()
}
