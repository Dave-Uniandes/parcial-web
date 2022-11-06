import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coffee } from '../coffee/coffee_class/coffee';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private api_url = environment.api_url

  constructor(
    private http: HttpClient
  ) { }

  get_coffee_list(){
    return this.http.get<Coffee[]>(this.api_url);
  }
}
