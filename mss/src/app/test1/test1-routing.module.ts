import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1comComponent } from './test1com/test1com.component';

const routes: Routes = [
  {
    path:'',component:Test1comComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test1RoutingModule { }
