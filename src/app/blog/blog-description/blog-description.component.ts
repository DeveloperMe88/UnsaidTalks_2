import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {BlogServiceService} from '../blog-service.service'

@Component({
  selector: 'app-blog-description',
  templateUrl: './blog-description.component.html',
  styleUrls: ['./blog-description.component.css']
})
export class BlogDescriptionComponent implements OnInit {

  constructor(private _route: ActivatedRoute,private _blogservice: BlogServiceService) { }

  selectedBlog:String="";

  ngOnInit() {
    this.selectedBlog=this._route.snapshot.params['name'];
  }

  blog:String=this._blogservice.getBlogDescription(this.selectedBlog);


}
