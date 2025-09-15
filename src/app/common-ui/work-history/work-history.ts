import { Component, input } from '@angular/core';
import { Job } from '../../data/interface/data.interface';

@Component({
  selector: 'app-work-history',
  imports: [],
  templateUrl: './work-history.html',
  styleUrl: './work-history.scss'
})
export class WorkHistory {
  job = input<Job>()
}
