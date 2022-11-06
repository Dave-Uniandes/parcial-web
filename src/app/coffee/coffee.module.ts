import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeComponent } from './coffee.component';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';



@NgModule({
  declarations: [
    CoffeeComponent,
    CoffeeListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CoffeeComponent
  ]
})
export class CoffeeModule { }
