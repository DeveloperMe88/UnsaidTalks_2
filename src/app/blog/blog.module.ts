import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { RouterModule } from '@angular/router';
import { BlogDescriptionComponent } from './blog-description/blog-description.component';
import {BlogServiceService} from './blog-service.service'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( [
                  {path: 'blog/:name', component: BlogDescriptionComponent }
              ] )
  ],
  declarations: [BlogComponent, BlogDescriptionComponent],
  providers:[BlogServiceService]
  
})
export class BlogModule { }
