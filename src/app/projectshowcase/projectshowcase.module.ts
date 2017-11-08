import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectshowcaseComponent } from './projectshowcase.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ProjectshowcaseComponent]
})/**
 * this module deals with project showcase tab
 */
export class ProjectshowcaseModule { }
