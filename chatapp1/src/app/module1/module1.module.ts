import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { TestComponent } from './test/test.component';  // Only declare here

@NgModule({
  declarations: [
    TestComponent  // Declare here
  ],
  imports: [
    CommonModule,
    Module1RoutingModule
  ],
  exports: [
    TestComponent  // Export if you want to use it in other modules
  ]
})
export class Module1Module { }
