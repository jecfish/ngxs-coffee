import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { AddToCart, RemoveOneCartItem, RemoveCartItem } from '../../state/app.actions';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cartList$ = this.store
    // list of cart coffee object
    .select(x => x.app.cart.map(item => {
      // get coffee object by name
      const { price, ...props } = x.app.coffeeList.find(c => c.name === item.name);

      return {
        quantity: item.quantity,
        unitPrice: price,
        price: item.quantity * price, // sum quantity
        ...props,
      };
    })).pipe(
      // sort by name
      map(x => x.sort((a, b) => a.name < b.name ? -1 : 1))
    );

  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
  }

  addOneItem(name) {
    this.store.dispatch(new AddToCart(name));
  }

  removeOneItem(name) {
    this.store.dispatch(new RemoveOneCartItem(name));
  }

  removeItem(name) {
    this.store.dispatch(new RemoveCartItem(name));
  }

}
