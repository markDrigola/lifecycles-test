import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-life-cycles-child',
  templateUrl: './life-cycles-child.component.html',
  styleUrls: ['./life-cycles-child.component.css']
})
export class LifeCyclesChildComponent implements OnInit, DoCheck {


  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    console.log('ngDoCheck LifeCyclesChildComponent');
  }
}
