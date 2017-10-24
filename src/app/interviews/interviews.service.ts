import { Injectable } from '@angular/core';
import {ICompany} from './../shared/model/iCompanyList';

@Injectable()
export class InterviewsService {

  list:ICompany[];

  constructor() { }

  getCompanies(selectedCollege:String):String[]{
    if(selectedCollege==="Thapar University"){
      return ["Amazon","Walmart","Nagarro","Microsoft","NXP","ARM","DeShaw"];
    } else if(selectedCollege==="IIT Delhi"){
      return ["Flipkart","Myntra","Oracle","Facebook","Wipro","Oxigen","Sandisk"];
    }else if(selectedCollege==="PEC"){
      return ["ShopClues","Siemens","Orient","Texas","Maruti","Tata","Air Force"];
    }else if(selectedCollege==="IIT Mumbai"){
      return ["ACC Limited","Asian Paints","Narolac","Reliance","Mahindra","Mahindra Comviva","EXL"];
    }else if(selectedCollege==="IIT Kanpur"){
      return ["Deloitte","UHG","Tavant","HSBC","Banks","HCL","TCS"];
    }else{
      return null;
    }
  }

  getStudentList(company:String, college:String): ICompany[]{

    this.list=[
      {id : "1",
      studentName: "ABC",
      branchAndYear:"ECE- 2017"},
      {id : "2",
      studentName: "DEF",
      branchAndYear:"COE- 2018"}
      ];

    return this.list;
  }

}
