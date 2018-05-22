import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { EmptyCart } from '../../state/app.actions';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  private coffeeList$ = this.store.select(x => x.app.coffeeList);
  private cart$ = this.store.select(x => x.app.cart);

  total$ = combineLatest(this.coffeeList$, this.cart$).pipe(
    map(([list, cart]) => cart.map(c => list.find(x => x.name === c.name).price * c.quantity)),
    map(x => x.reduce((acc, curr) => acc + curr, 0))
  );

  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
  }

  pay() {
    alert('Yay, order placed. Start a new order!');
    this.store.dispatch(new EmptyCart());
    this.router.navigateByUrl('/menu');
  }

}
