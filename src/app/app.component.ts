import { Component } from '@angular/core';
import {ITestimonials} from 'app/shared/model/iTestimonials'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "";
  desc = "";
  name = "";
  testimonials : ITestimonials[]=[
    {id : "0",
    title: "Amazing Try",
    description : "Hope this will work",
    name : "developer"},

    {id : "1",
    title: "Working",
    description : "Finally its working",
    name : "Tester"},

    {id : "2",
    title: "Great to see Working",
    description : "Finally its working!! Yayyyy",
    name : "User"}
  ];

  ngOnInit() {
    let i = 0;
    window.setInterval(() => {
      this.title = this.testimonials[i].title;
      this.desc=this.testimonials[i].description;
      this.name=this.testimonials[i].name;
      i++;
      i = i%3;
    },4000)
  }
}
