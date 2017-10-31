import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
/**
 * this component will contain all the shared functionalities of applicaion. Eg model classes, shared services
 */
export class SharedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
