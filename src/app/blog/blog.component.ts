import { Component, OnInit } from '@angular/core';
import { BBox } from './../shared/model/iBbox';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  constructor() { }
  blogPosts:BBox[]=[
    {id : "0",
    title: "Post1"},
    {id : "1",
    title: "Post2"},
    {id : "2",
    title: "Post3"},
    {id : "3",
    title: "Post4"},
    {id : "4",
    title: "Post5"},
    {id : "5",
    title: "Post6"},
    {id : "6",
    title: "Post7"}];
    
  ngOnInit() {

  }

}
