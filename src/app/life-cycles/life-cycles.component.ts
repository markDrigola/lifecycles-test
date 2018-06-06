import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-life-cycles',
  templateUrl: './life-cycles.component.html',
  styleUrls: ['./life-cycles.component.css']
})
export class LifeCyclesComponent implements OnChanges, OnInit {


  @Input() private data: string;

  constructor() {
    console.log('Constructor !');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges !');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit !');
  }

}
