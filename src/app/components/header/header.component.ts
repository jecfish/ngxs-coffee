import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { environment } from '../../../environments/environment';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Select(AppState.totalCartQuantity)
  cartCount$;
  // cartCount$ = this.store.select(x => x.app.cart.map(item => item.quantity).reduce((acc, curr) => acc + curr, 0));
  isFeatureRemixOn = environment.features.remix;

  constructor(private store: Store) { }

  ngOnInit() {
  }

}
