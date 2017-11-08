import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedComponent]
})
/**
 * this module contains all the shared components of the application
 */
export class SharedModule { }
