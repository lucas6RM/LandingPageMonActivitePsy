import { Component, signal } from '@angular/core';

import { Hero } from './hero/hero';
import { Fonctionalities } from "./fonctionalities/fonctionalities";
import { SecurityAndData } from "./security-and-data/security-and-data";
import { Costs } from "./costs/costs";
import { Reviews } from "./reviews/reviews";
import { GetStarted } from "./get-started/get-started";

@Component({
  selector: 'app-root',
  imports: [Hero, Fonctionalities, SecurityAndData, Costs, Reviews, GetStarted],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('landing_page_mon_activite_psy');
}
