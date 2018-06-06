import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AfterViewChildComponent} from "../after-view-child/after-view-child.component";

@Component({
  selector: 'app-after-view-init',
  templateUrl: './after-view-init.component.html',
  styleUrls: ['./after-view-init.component.css']
})
export class AfterViewInitComponent implements  AfterViewChecked, AfterViewInit {

  // @ViewChild(AfterViewChildComponent) viewChild: AfterViewChildComponent;
  constructor() { }

  ngAfterViewChecked(): void {
    debugger
    console.log('ngAfterViewChecked AfterViewInitComponent');
  }

  ngAfterViewInit(): void {
    debugger
    console.log('ngAfterViewInit AfterViewInitComponent');
  }

}
