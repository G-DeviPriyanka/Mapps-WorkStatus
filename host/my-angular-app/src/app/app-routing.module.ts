import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SerService } from './ser.service';

const routes: Routes = [
  {
    path:'home',component:HomeComponent 
  },
  {
    path:'product',component:ProductListComponent,canDeactivate:[SerService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
