import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {Hero} from "../app.component";

@Component({
  selector: 'app-ng-do-check',
  templateUrl: './ng-do-check.component.html',
  styleUrls: ['./ng-do-check.component.css']
})
export class NgDoCheckComponent implements OnInit, DoCheck {
  @Input() hero: Hero;
  @Input() power: string;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    // debugger
    console.log('ngDoCheck');
  }

}
