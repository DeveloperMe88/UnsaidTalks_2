import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewsComponent } from './interviews.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [InterviewsComponent]
})
export class InterviewsModule { }
