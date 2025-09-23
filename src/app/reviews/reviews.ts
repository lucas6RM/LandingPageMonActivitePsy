import { Component } from '@angular/core';
import { CardReview } from "./card-review/card-review";

@Component({
  selector: 'app-reviews',
  imports: [CardReview],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css'
})
export class Reviews {

}
