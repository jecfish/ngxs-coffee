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

  // @Select(AppState.totalCartQuantity)
  cartCount$;

  isFeatureRemixOn = environment.features.remix;

  constructor(private store: Store) { }

  ngOnInit() {
  }

}
