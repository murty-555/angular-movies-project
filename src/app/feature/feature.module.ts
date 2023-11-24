import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [RatingComponent]
})
export class FeatureModule { }
