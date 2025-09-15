import { DataService } from './../../data/services/data.services';
import { Component, OnInit } from '@angular/core';
import { SocialLink } from '../../data/interface/data.interface';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-social-links',
  imports: [SvgIconComponent],
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss'
})
export class SocialLinks implements OnInit {
  socialLinks: SocialLink[] = []

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.socialLinks = this.dataService.socialLinks
  }
}
