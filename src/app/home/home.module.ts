import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { RouterModule } from '@angular/router'
import {ContactComponent} from 'app/contact/contact.component'
import {InterviewsComponent} from 'app/interviews/interviews.component'
import {BlogComponent} from 'app/blog/blog.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( [
                  { path: 'contact', component:  ContactComponent},
                  { path: 'blog', component:  BlogComponent},
                  { path: 'interviews', component:  InterviewsComponent}
              ] )
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
