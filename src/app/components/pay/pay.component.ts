import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Emitter, Emittable } from '@ngxs-labs/emitter';
import { Router } from '@angular/router';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  @Select(AppState.totalCartAmount)
  total$;

  @Emitter(AppState.emptyCart)
  private emptyCart: Emittable<string>;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  pay() {
    alert('Yay, order placed. Start a new order!');
    this.emptyCart.emit();
    this.router.navigateByUrl('/menu');
  }

}
