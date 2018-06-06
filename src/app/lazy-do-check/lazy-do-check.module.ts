import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyDoCheckRoutingModule } from './lazy-do-check-routing.module';
import { StartComponent } from './start/start.component';

@NgModule({
  imports: [
    CommonModule,
    LazyDoCheckRoutingModule
  ],
  declarations: [StartComponent]
})
export class LazyDoCheckModule { }
