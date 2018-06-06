import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LifeCyclesComponent } from './life-cycles/life-cycles.component';
import { LifeCyclesChildComponent } from './life-cycles-child/life-cycles-child.component';
import {FormsModule} from "@angular/forms";
import { FirstRoutComponent } from './first-rout/first-rout.component';
import { SecondRoutComponent } from './second-rout/second-rout.component';
import { NgOnChangesComponent } from './ng-on-changes/ng-on-changes.component';
import { NgDoCheckComponent } from './ng-do-check/ng-do-check.component';
import { AfterViewInitComponent } from './after-view-init/after-view-init.component';
import { AfterViewCheckedComponent } from './after-view-checked/after-view-checked.component';
import { AfterViewChildComponent } from './after-view-child/after-view-child.component';
import {NotLazyModule} from "./not-lazy/not-lazy.module";
import {ChildrensModule} from "./childrens/childrens.module";


@NgModule({
  declarations: [
    AppComponent,
    LifeCyclesComponent,
    LifeCyclesChildComponent,
    FirstRoutComponent,
    SecondRoutComponent,
    NgOnChangesComponent,
    NgDoCheckComponent,
    AfterViewInitComponent,
    AfterViewCheckedComponent,
    AfterViewChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NotLazyModule,
    ChildrensModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
