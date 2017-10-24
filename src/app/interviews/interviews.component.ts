import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {InterviewsService} from'./interviews.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {

  constructor(private _router: Router, private _interviewService: InterviewsService,private _route: ActivatedRoute) { }

  colleges:String[]=["Thapar University","PEC","IIT Delhi","IIT Mumbai","IIT Kanpur"];
  companies:String[]=null;
  selectedCollege:String="";

  ngOnInit():void {
    this.selectedCollege=this._route.snapshot.params['college'];
    this.companies=this._interviewService.getCompanies(this.selectedCollege);
  }

  onChange(collegeValue) {
    this.companies=this._interviewService.getCompanies(collegeValue);
    this.selectedCollege=collegeValue;
    this._router.navigate(['/interviews', collegeValue]);
}
  studentList(company:String):void{
    this._router.navigate(['/interviews', this.selectedCollege,company]);
  }
}
