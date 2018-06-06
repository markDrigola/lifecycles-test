import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit, DoCheck {
  ngDoCheck(): void {
    console.log('ngDoCheck StartComponent');
  }

  constructor() { }

  ngOnInit() {
  }

}
