import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Coffee[]>('assets/list.json').pipe(
      delay(1000)
    );
  }
}
