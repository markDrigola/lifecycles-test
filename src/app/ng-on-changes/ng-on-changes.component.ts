import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Hero} from "../app.component";

@Component({
  selector: 'app-ng-on-changes',
  templateUrl: './ng-on-changes.component.html',
  styleUrls: ['./ng-on-changes.component.css']
})
export class NgOnChangesComponent implements OnInit, OnChanges {


  @Input() hero: Hero;
  @Input() power: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
