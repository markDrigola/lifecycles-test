import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit, DoCheck {


  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    console.log('ngDoCheck ChildrenComponent');
  }

}
