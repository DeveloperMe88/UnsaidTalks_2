import { Component, OnInit } from '@angular/core';
import { BBox } from './../shared/model/iBbox';
import { Router } from '@angular/router';
import {BlogServiceService} from './blog-service.service'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
/**
 * Controls the blog tab functionalities
 */
export class BlogComponent implements OnInit {

  blogPosts:BBox[];
  searchKeyWord:String="";
  /**
   * populates the blogs on the view at the time of component loading
   * @param _router 
   * @param _blogservice 
   */
  constructor(private _router: Router, private _blogservice: BlogServiceService) {
    this.blogPosts=this._blogservice.getBlogPosts();
   }
   
  ngOnInit() {}

/**
 * whenever user clicks on a particular blog this function routes to that particular blog
 * @param blogTile 
 */
  viewBolg(blogTile:String):void{
    this._router.navigate(['/blog', blogTile]);
  }

/**
 * filters the bog according to keyword typed in search bar
 * search is according to blog title
 */
  filterBlogs():void{
    console.log(this.searchKeyWord);
    this.blogPosts=this._blogservice.getSearchedPosts(this.searchKeyWord);
  }

}
