import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Coffee } from '../../coffee_class/coffee';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit, OnChanges {

  @Input() coffeeList: Coffee[] = [];

  public totalOrigen = 0;
  public totalBlend = 0;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(){
    this.coffeeList.forEach( item => {
      if(item.tipo === 'Blend'){
        this.totalBlend = this.totalBlend + 1;
      }
      if(item.tipo === 'Café de Origen'){
        this.totalOrigen = this.totalOrigen + 1;
      }
    })
  }
  
}
