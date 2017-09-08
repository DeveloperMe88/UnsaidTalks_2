import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from 'app/home/home.component';
import {AboutComponent} from 'app/about/about.component'
import {BlogComponent} from 'app/blog/blog.component'
import {ContactComponent} from 'app/contact/contact.component'
import {InterviewsComponent} from 'app/interviews/interviews.component'
import {ProjectshowcaseComponent} from 'app/projectshowcase/projectshowcase.component'

const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '*', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component:  HomeComponent},
  { path: 'about', component:  AboutComponent},
  { path: 'blog', component:  BlogComponent},
  { path: 'contact', component:  ContactComponent},
  { path: 'interviews', component:  InterviewsComponent},
  { path: 'projectshowcase', component:  ProjectshowcaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }