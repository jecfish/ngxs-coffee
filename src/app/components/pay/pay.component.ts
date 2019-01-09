import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { Router } from '@angular/router';
import { EmptyCart } from '../../state/app.actions';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  // @Select(AppState.totalCartAmount)
  total$;

  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
  }

  pay() {
    alert('Yay, order placed. Start a new order!');
    this.store.dispatch(new EmptyCart());
    this.router.navigateByUrl('/menu');
  }

}
