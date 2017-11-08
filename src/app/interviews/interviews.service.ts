import { Injectable } from '@angular/core';
import {ICompany} from './../shared/model/iCompanyList';

@Injectable()
/**
 * this class contains all the services related to interview section
 */
export class InterviewsService {

  list:ICompany[];
  companies:String[];

  constructor() { }

/**
 * this method returns string array of companies according to selected college
 * @param selectedCollege 
 */
  getCompanies(selectedCollege:String):String[]{
    if(selectedCollege==="Thapar University"){
       this.companies=["Amazon","Walmart","Nagarro","Microsoft","NXP","ARM","DeShaw"];
       return this.companies;
    } else if(selectedCollege==="IIT Delhi"){
       this.companies=["Flipkart","Myntra","Oracle","Facebook","Wipro","Oxigen","Sandisk"];
       return this.companies;
    }else if(selectedCollege==="PEC"){
       this.companies=["ShopClues","Siemens","Orient","Texas","Maruti","Tata","Air Force"];
       return this.companies;
    }else if(selectedCollege==="IIT Mumbai"){
       this.companies=["ACC Limited","Asian Paints","Narolac","Reliance","Mahindra","Mahindra Comviva","EXL"];
       return this.companies;
    }else if(selectedCollege==="IIT Kanpur"){
       this.companies=["Deloitte","UHG","Tavant","HSBC","Banks","HCL","TCS"];
       return this.companies;
    }else{
      return null;
    }
  }

/**
 * this method returns student list according to selected college and selected company
 * @param company 
 * @param college 
 */
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

/**
 * this method will return template for interview of selected student
 */
  getDemoInterview():String{
    return "<p><strong>“Muaaz Ahmad”</strong> who was placed at “<strong>Maruti Suzuki India Ltd</strong><em><strong>” </strong></em>talks about his interview experience and some other tips to prepare for placement season.</p>\n<p>The interview was taken by our <em>UnsaidTalks interviewer- &#8220;Sneha&#8221;</em> from  Thapar University.</p>\n<p>Check out what he says about placement season.</p>\n<p><strong><em>Branch &amp; Graduation Year: </em></strong> ME– 2018</p>\n<p><em><strong>Profile Offered</strong></em>: Production Engineering / Engineering (to be decided up on induction)</p>\n<p><strong><em>Cgpa cutoff: </em><em> </em></strong>6.5</p>\n<p><strong><em>Interview difficulty level</em></strong>: 8/10 (1-very easy, 10-very Difficult)</p>\n<p>Here are the questions we asked from Muaaz Ahmad  to know about his interview experience.</p>\n<p><em><strong>Question 1: Introduce yourself to our readers.</strong></em></p>\n<p>Answer :Car enthusiast</p>\n<p><em><strong>Question 2: Describe Your written test experience specifying the number of rounds, details of each round and type of test platform ( If online mention the type of test platform eg. Hackereart, CoCubes, </strong></em><strong>Amcat</strong><em><strong> etc).</strong></em></p>\n<p>Answer:One online written test. Conducted nationally by AMCAT. Top 15% students are selected irrespective of college. Campus presentation+interview of selected candidates. Description is send to all the applicants before written test. It consists of following sections: 1) Verbal 2) Quantitative 3) Logical Reasoning 4) Psychometric Test (Personality test) 5) Techanical Test Number of questions in various sections are not fixed but generally given in description. 1, 2 and 3 are easy and can be practiced from any book for. competitive exam. 4 can be answered by considering company&#8217;s vision and employer&#8217;s perspective. Some research on Google will really help. 5 should be prepared from slides and notes of subjects taught in curriculum. Hand book for GATE , IES by Made-easy (or any reputed publisher/other) is good for revision.</p>\n<p><script async=\"\" src=\"//\"></script><br />\n<ins class=\"adsbygoogle\" data-ad-layout=\"in-article\" data-ad-format=\"fluid\" data-ad-client=\"ca-pub-5113943724185209\" data-ad-slot=\"8179990891\"></ins><br />\n<script>\n     (adsbygoogle = window.adsbygoogle || []).push({});\n</script><br />\n<em><strong>Question 3: Describe your all technical interviews specifying number of rounds and details of each round (if any).</strong></em></p>\n<p>Answer.One presentation+interview round. Presentation was to be prepared in MSIL template (provided by the company) Presentation was required to address 4 question. 1) Who you are? 2) What is your department and division preference? (2 should be mentioned from choice of 4) 3) Justification for your preferences. 4) What makes you different from others? Interview round was both Technical and HR. Few questions were on industrial training and it&#8217;s relevance. Few conceptual (technical) questions subjected to the interviewer..</p>\n<p><em><strong>Question 4: Describe your all HR interviews specifying number of rounds and details of each round.</strong></em></p>\n<p>Answer: Same as in previous question. Introduction was already in the presentation. One important question was on choice between higher studies and industrial experience.</p>\n<p><em><strong>Question 5: What do you think were key factors for your selection?</strong></em></p>\n           \r\n            <div class=\"onp-locker-call\" style=\"display: none;\" data-lock-id=\"onpLock816762\">\r\n                <p></p>\n<p>Answer:Through knowledge of the industrial projects done during internship. I was able to describe the relevance of work to industrial setup in general. Summer Research Internship at a national institute. CGPA, it works as one&#8217;s first impression</p>\n<p></p>\r\n            </div>\r\n         \r\n\r\n        \n<p><b><i>Question 6:</i></b> <strong><em>What would you like to advise juniors for cracking Technical round of this company?</em></strong></p>\n<p>Answer:Be through with industrial projects. 6 months internship is crucial for such exposure. Relevance of the industrial projects to the company which one is appearing for, is of significant importance. Look out for various internships in summer/part time to improve up on certain skillset.</p>\n<p><b><i>Question 7:</i></b> <strong><em>What would you like to advise juniors for cracking HR round of this company?</em></strong></p>\n<p>Answer:Be very clear on why you want to be a part of the company.</p>\n<p>For any further Queries feel free to comment below</p>\n";
  }

/**
 * this method takes keyword as input , filters list of companies according to keyword and set company variable accordinsgly
 * @param keyWord 
 */
  getSearchedCompany(keyWord:String):String[]{
    return this.companies.filter(x=>x.toLowerCase().includes(keyWord.toLowerCase()));
  }

}
