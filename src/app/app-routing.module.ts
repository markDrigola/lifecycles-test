import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstRoutComponent} from "./first-rout/first-rout.component";
import {SecondRoutComponent} from "./second-rout/second-rout.component";
import {ParentComponent} from "./childrens/parent/parent.component";
import {ChildrenComponent} from "./childrens/children/children.component";

const routes: Routes = [
  {
    path: 'children', children: [
    {
      path: '', component: ParentComponent
    },
    {
      path: 'child', component: ChildrenComponent
    }
  ]
  },
  {
    path: 'first', component: FirstRoutComponent
  },
  {
    path: 'second', component: SecondRoutComponent
  },
  {
    path: 'lazy', loadChildren: './lazy-do-check/lazy-do-check.module#LazyDoCheckModule'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
