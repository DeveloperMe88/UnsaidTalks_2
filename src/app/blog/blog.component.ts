import { Component, OnInit } from '@angular/core';
import { BBox } from './../shared/model/iBbox';
import { Router } from '@angular/router';
import {BlogServiceService} from './blog-service.service'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogPosts:BBox[];
  constructor(private _router: Router, private _blogservice: BlogServiceService) {
    this.blogPosts=this._blogservice.getBlogPosts();
   }
   
  ngOnInit() {}

  viewBolg(blogTile:String):void{
    this._router.navigate(['/blog', blogTile]);
  }

}
