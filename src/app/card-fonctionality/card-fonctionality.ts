import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-fonctionality',
  imports: [],
  templateUrl: './card-fonctionality.html',
  styleUrl: './card-fonctionality.css'
})
export class CardFonctionality {
  icon = input.required<string>()
  title = input.required<string>()
  description = input.required<string>()
}
