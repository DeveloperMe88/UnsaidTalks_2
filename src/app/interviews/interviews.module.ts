import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewsComponent } from './interviews.component';
import { RouterModule } from '@angular/router';
import { SelectedCollegeComponent } from './selected-college/selected-college.component';
import {InterviewsService} from './interviews.service';
import { FormsModule } from '@angular/forms';
import { InterviewDescriptionComponent } from './interview-description/interview-description.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild( [
                  {path: 'interviews/:college/:company', component: SelectedCollegeComponent },
                  {path: 'interviews/:college', component: InterviewsComponent },
                  {path: 'interviews/:college/:company/:id', component: InterviewDescriptionComponent}
              ] )
  ],
  declarations: [InterviewsComponent, SelectedCollegeComponent, InterviewDescriptionComponent],
  providers:[InterviewsService]
})
export class InterviewsModule { }
