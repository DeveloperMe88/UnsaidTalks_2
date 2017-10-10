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
    title: "Post1",
    imageUrl:"https://www.theblogstarter.com/wp-content/uploads/2014/02/4.jpg"},
    {id : "1",
    title: "Post2",
    imageUrl:"https://www.revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic.png"},
    {id : "2",
    title: "Post3",
    imageUrl:"http://markdalton.net/wp-content/uploads/2017/03/F7148507-7860-465B-950B-2F55B420CEDB-1229-0000010877FFE7CA_tmp.jpg"},
    {id : "3",
    title: "Post4",
    imageUrl:"http://10.15.0.113:15871/cgi-bin/blockpage.cgi?ws-session=800243148"},
    {id : "4",
    title: "Post5",
    imageUrl:"http://foxtailmarketing.com/wp-content/uploads/2014/07/+recommended_blog_3.jpg"},
    {id : "5",
    title: "Post6",
    imageUrl:"https://www.theblogstarter.com/wp-content/uploads/2014/02/4.jpg"},
    {id : "6",
    title: "Post7",
    imageUrl:"http://foxtailmarketing.com/wp-content/uploads/2014/07/+recommended_blog_3.jpg"}];
    
  ngOnInit() {

  }

}
