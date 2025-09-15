import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./common-ui/header/header";
import { PageContent } from "./common-ui/page-content/page-content";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, PageContent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
