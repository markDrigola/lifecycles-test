import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-view-child',
  templateUrl: './after-view-child.component.html',
  styleUrls: ['./after-view-child.component.css']
})
export class AfterViewChildComponent implements OnInit {
  heroName = 'Magneta';

  constructor() { }

  ngOnInit() {
  }

}
