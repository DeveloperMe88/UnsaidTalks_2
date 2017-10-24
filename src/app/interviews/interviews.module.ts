import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewsComponent } from './interviews.component';
import { RouterModule } from '@angular/router';
import { SelectedCollegeComponent } from './selected-college/selected-college.component';
import {InterviewsService} from './interviews.service';
import { FormsModule } from '@angular/forms';;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild( [
                  {path: 'interviews/:college/:company', component: SelectedCollegeComponent },
                  {path: 'interviews/:college', component: InterviewsComponent },
              ] )
  ],
  declarations: [InterviewsComponent, SelectedCollegeComponent],
  providers:[InterviewsService]
})
export class InterviewsModule { }
