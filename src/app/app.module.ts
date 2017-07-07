import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AddMeal} from './add-meal.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMeal
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
