import { Component, signal } from '@angular/core';

import { Hero } from './hero/hero';
import { Fonctionalities } from "./fonctionalities/fonctionalities";
import { SecurityAndData } from "./security-and-data/security-and-data";
import { Costs } from "./costs/costs";
import { Reviews } from "./reviews/reviews";
import { GetStarted } from "./get-started/get-started";
import { Faq } from "./faq/faq";
import { Contactform } from "./contactform/contactform";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [Hero, Fonctionalities, SecurityAndData, Costs, Reviews, GetStarted, Faq, Contactform, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('landing_page_mon_activite_psy');
}
