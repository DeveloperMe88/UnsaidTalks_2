import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module';
import {AboutModule} from './about/about.module';
import {BlogModule} from './blog/blog.module';
import {ContactModule} from './contact/contact.module';
import {ProjectshowcaseModule} from './projectshowcase/projectshowcase.module';
import {InterviewsModule} from './interviews/interviews.module';
import {AppRoutingModule} from './app.routing';
import {TestimonialsService} from './shared/services/testimonials.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    AboutModule,
    BlogModule,
    ContactModule,
    ProjectshowcaseModule ,
    InterviewsModule ,
    InterviewsModule
  ],
  providers: [TestimonialsService],
  bootstrap: [AppComponent]
})/**
 * this is main module which will be loaded first and it defines bootstrap component
 */
export class AppModule { }
