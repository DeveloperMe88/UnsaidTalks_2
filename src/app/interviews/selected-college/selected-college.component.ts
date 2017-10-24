import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {ICompany} from '../../shared/model/iCompanyList';
import {InterviewsService} from'../interviews.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-college',
  templateUrl: './selected-college.component.html',
  styleUrls: ['./selected-college.component.css']
})
export class SelectedCollegeComponent implements OnInit {

  sucess:String="";
  selectedCollege:String="";
  selectedCompany:String="";
  studentList: ICompany[];

  constructor(private _route: ActivatedRoute,  private _interviewService: InterviewsService,private _router: Router,) {
  }

  ngOnInit() {
    this.selectedCollege= this._route.snapshot.params['college'];
    this.selectedCompany=this._route.snapshot.params['company'];

    this.studentList=this._interviewService.getStudentList(this.selectedCompany,this.selectedCollege);
  }

  showCompanyList(college:String){
    this._router.navigate(['/interviews', this.selectedCollege]);
  }

}
