import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Module1Module } from './module1/module1.module';  // Import here

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
    // Do not declare TestComponent here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Module1Module  // Import the module that declares TestComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
