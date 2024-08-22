import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lazy1Component } from './lazy1/lazy1.component';
import { TestModule } from '../test/test.module';

const routes: Routes = [
  {
    path:'',component:Lazy1Component
  },
  {
    path:'rform',
    loadChildren:()=>import ('../test1/test1.module').then((m)=>m.Test1Module)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
