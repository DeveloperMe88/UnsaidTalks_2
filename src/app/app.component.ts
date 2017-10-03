import { Component } from '@angular/core';
import {ITestimonials} from 'app/shared/model/iTestimonials';

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
    title: "Best platform for pacement advice",
    description : "I think it’s the best platform if you are looking for the placement advice. This is the initiative taken by our Seniors which had gone through all this and who can give a profitable advice. Rest is on us how to absorb and have a good placement!!",
    name : "Anmol Ghai"},

    {id : "1",
    title: "Not less than a sea of information",
    description : "Really a resourceful page! Its not less than a sea of information and knowledge. Amazing work!",
    name : "Stuti Kapoor"},

    {id : "2",
    title: "Amazing work",
    description : "wish this website can somehow reach to our college also. Amazing work.",
    name : "Sachin Sharma"},

    {id : "3",
    title: "Was badly needed",
    description : "Amazing initiative 🙂 Best of luck to team. Was badly needed 🙂",
    name : "Jashan Singh"},

    {id : "4",
    title: "Will help students preparing for Campus Placement",
    description : "Nice initiative guys. Will be helpful for Thaparians who are preparing for campus placement. Keep up the good work",
    name : "Tushar Chhabra"},
  ];

  ngOnInit() {
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
