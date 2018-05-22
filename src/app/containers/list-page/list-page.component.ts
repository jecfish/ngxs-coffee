import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store, Select } from '@ngxs/store';

import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { GetCoffeeList, AddToCart } from '../../state/app.actions';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  @Select((state: AppApp) => state.app.coffeeList)
  list$;

  isFeatureRemixOn = environment.features.remix;

  constructor(private router: Router, private store: Store) { }

  ngOnInit() {
    this.store.selectOnce(x => x.app.coffeeList.length)
      .subscribe(x => {
        if (x) { return; }
        this.store.dispatch(new GetCoffeeList());
      });
  }

  addToCart(name: string) {
    this.store.dispatch(new AddToCart(name));
  }

  addToCartAndCheckout(name: string) {
    this.addToCart(name);
    this.router.navigateByUrl('/cart');
  }
}
