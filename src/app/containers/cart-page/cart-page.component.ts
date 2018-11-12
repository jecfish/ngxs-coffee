import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { AddToCart, RemoveOneCartItem, RemoveCartItem } from '../../state/app.actions';
import { Title, Meta } from '@angular/platform-browser';

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

  constructor(private store: Store, private router: Router, private title: Title,
    private route: ActivatedRoute, private meta: Meta) {
    title.setTitle('coffee cart | crafty');
    meta.addTags([
      { name: 'description', content: 'crafty cart- caffeine lover, buy a coffee now!' },
      { name: 'twitter:card', value: 'summary' },
      { name: 'twitter:image', content: '/assets/cart-hero.png' },
      { property: 'og:title', content: 'coffee cart | crafty' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: location.href },
      { property: 'og:image', content: '/assets/cart-hero.png' },
      { property: 'og:description', content: 'crafty cart - caffeine lover, buy a coffee now!' },
    ], false);
  }

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
