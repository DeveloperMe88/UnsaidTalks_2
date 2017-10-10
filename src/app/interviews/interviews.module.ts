import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewsComponent } from './interviews.component';
import { RouterModule } from '@angular/router';
import { SelectedCollegeComponent } from './selected-college/selected-college.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [InterviewsComponent, SelectedCollegeComponent]
})
export class InterviewsModule { }
