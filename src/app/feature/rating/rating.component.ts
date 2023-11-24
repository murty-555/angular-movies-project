import { Component, Input } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() rating : any;
  @Input() isReadOnly: boolean = true;
  constructor(config: NgbRatingConfig){
    config.max = 5;
    // config.readonly=this.isReadOnly
  }
  
}
