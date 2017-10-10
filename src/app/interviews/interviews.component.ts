import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {

  constructor() { }

  colleges:String[]=["Thapar University","PEC","IIT Delhi","IIT Mumbai","IIT Kanpur"];
  companies:String[]=null;

  ngOnInit() {
  }
  onChange(collegeValue) {
    console.log(collegeValue);
    if(collegeValue==="Thapar University"){
      this.companies=["Amazon","Walmart","Nagarro","Microsoft","NXP","ARM","DeShaw"];
    } else if(collegeValue==="IIT Delhi"){
      this.companies=["Flipkart","Myntra","Oracle","Facebook","Wipro","Oxigen","Sandisk"];
    }
}
}
