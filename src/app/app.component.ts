import { Component } from '@angular/core';
import {AddMeal} from './add-meal.component';

@Component({
  selector: 'my-meal',
  template: `
   <h1>Meal Tracker App</h1>
   <add-meal></add-meal>
  `
 })
export class AppComponent {

}
