import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Module1Module } from './module1/module1.module';

const routes: Routes = [
  {
    path:'',component: HomeComponent,
  },
  {
    path:'module',   loadChildren:()=>
    import ( './module1/module1.module' ).then((module:any) =>module.Module1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
