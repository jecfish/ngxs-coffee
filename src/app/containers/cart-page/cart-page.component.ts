import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { map } from 'rxjs/operators';
import { Emitter, Emittable } from '@ngxs-labs/emitter';
import { AppState } from '../../state/app.state';

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


  @Emitter(AppState.addOneCartItem)
  addOneItem: Emittable<string>;


  @Emitter(AppState.removeOneCartItem)
  removeOneItem: Emittable<string>;


  @Emitter(AppState.removeCartItem)
  removeItem: Emittable<string>;

  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
  }

}
