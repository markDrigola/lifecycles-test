import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';

export class Hero {
  name: string;
  age: number;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit, DoCheck {


  hero: Hero = {
    name: '',
    age: null
  };

  power = '';

  data = '';


  title = 'app';
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  newHero(name) {
    this.hero = new Hero(name, 25);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
}
