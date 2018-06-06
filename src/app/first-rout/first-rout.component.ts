import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-first-rout',
  templateUrl: './first-rout.component.html',
  styleUrls: ['./first-rout.component.css']
})
export class FirstRoutComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked, DoCheck {



  constructor() { }

  ngOnInit() {
    console.log('ngOnInit FirstRoutComponent');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck FirstRoutComponent');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges FirstRoutComponent');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy FirstRoutComponent');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit FirstRoutComponent');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit FirstRoutComponent');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked FirstRoutComponent');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked FirstRoutComponent');
  }
}
