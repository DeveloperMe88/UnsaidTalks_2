import { Component } from '@angular/core';
import {ITestimonials} from 'app/shared/model/iTestimonials';
import {TestimonialsService} from 'app/shared/services/testimonials.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * bootstrap component that loads common view i.e header(navigation bar), testimonials, footer
 */
export class AppComponent {
  title = "";
  desc = "";
  name = "";
  testimonials : ITestimonials[];

 constructor(private _testimonialService: TestimonialsService) { }

/**
 * oninit method gets testimonials from service and loads them in view
 */
  ngOnInit() {
    this.testimonials=this._testimonialService.getTestimonials();
    let i = 0;
    window.setInterval(() => {
      this.title = this.testimonials[i].title;
      this.desc=this.testimonials[i].description;
      this.name=this.testimonials[i].name;
      i++;
      i = i%5;
    },4000)
  }
}
