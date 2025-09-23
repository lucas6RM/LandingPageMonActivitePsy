import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-review',
  imports: [],
  templateUrl: './card-review.html',
  styleUrl: './card-review.css'
})
export class CardReview {

  imgUrl = input.required<string>();
  firstName = input.required<string>();
  job = input.required<string>();
  comment = input.required<string>();
}
