import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, DoCheck {


  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    console.log('ngDoCheck ParentComponent');
  }
}
