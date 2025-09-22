import { Component, signal } from '@angular/core';

import { Hero } from './hero/hero';

@Component({
  selector: 'app-root',
  imports: [Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('landing_page_mon_activite_psy');
}
