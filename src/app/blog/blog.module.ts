import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { RouterModule } from '@angular/router';
import { BlogDescriptionComponent } from './blog-description/blog-description.component';
import {BlogServiceService} from './blog-service.service'
import {FormsModule} from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild( [
                  {path: 'blog/:name', component: BlogDescriptionComponent }
              ] )
  ],
  declarations: [BlogComponent, BlogDescriptionComponent],
  providers:[BlogServiceService]
  
})
export class BlogModule { }
