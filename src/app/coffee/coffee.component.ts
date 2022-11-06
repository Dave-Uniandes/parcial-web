import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../services/coffee.service'
import { Coffee } from './coffee_class/coffee';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  public coffeeList: Coffee[] = [];

  constructor(
    private coffeService: CoffeeService
  ) { }

  ngOnInit(): void {
    this.coffeService.get_coffee_list().subscribe( response => {
      this.coffeeList = response;
    })
  }

}
