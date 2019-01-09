import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';

import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { GetCoffeeList } from '../../state/app.actions';
import { AppState } from '../../state/app.state';
import { Emittable, Emitter } from '@ngxs-labs/emitter';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  // @Select((state: App) => state.app.coffeeList)
  @Select(AppState.coffeeList)
  list$;

  @Emitter(AppState.addToCart)
  addToCart: Emittable<string>;

  isFeatureRemixOn = environment.features.remix;

  constructor(private router: Router, private store: Store) { }

  ngOnInit() {
    const isListPopulated = this.store.selectSnapshot<AppModel>(x => x.app.coffeeList.length);
    if (isListPopulated) { return; }
    this.store.dispatch(new GetCoffeeList());
  }

  addToCartAndCheckout(name: string) {
    this.addToCart.emit(name);
    this.router.navigateByUrl('/cart');
  }
}
