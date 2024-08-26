import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';

const routes: Routes = [
 
  
  { path: 'show', component: ShowComponent },
  { path:'comp1',component:Comp1Component}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
