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
  searchKeyWord:String="";

/**
 * this method gets selected company via snapshot and loads companies according to selected college
 */
  ngOnInit():void {
    this.selectedCollege=this._route.snapshot.params['college'];
    this.companies=this._interviewService.getCompanies(this.selectedCollege);
  }

/**
 * when user selects a college from drop down this method is called to load companies
 * @param collegeValue 
 */
  onChange(collegeValue) {
    this.companies=this._interviewService.getCompanies(collegeValue);
    this.selectedCollege=collegeValue;
    this._router.navigate(['/interviews', collegeValue]);
    this.searchKeyWord="";
}
/**
 * this method routes to list page according to selected company of a specific college
 * @param company 
 */
  studentList(company:String):void{
    this._router.navigate(['/interviews', this.selectedCollege,company]);
  }

/**
 * this method filters company list according to search keyword typed in search bar
 */
  searchCompanies():void{
    this.companies=this._interviewService.getSearchedCompany(this.searchKeyWord);
  }
}
