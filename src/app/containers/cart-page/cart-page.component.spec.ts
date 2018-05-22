import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { NgxsModule, Store } from '@ngxs/store';

import { CartPageComponent } from './cart-page.component';
import { PayComponent } from '../../components/pay/pay.component';

import { GetCoffeeListSuccess, AddToCart, RemoveOneCartItem, RemoveCartItem } from '../../state/app.actions';
import { AppState } from '../../state/app.state';
import { HttpClientModule } from '@angular/common/http';

describe('CartPageComponent', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([AppState]),
        HttpClientModule,
      ],
      declarations: [CartPageComponent, PayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.get(Store);
  });

  beforeEach(() => {
    // arrange
    store.dispatch(new GetCoffeeListSuccess([
      { name: 'coffee aa', price: 10, recipe: [] },
      { name: 'coffee bb', price: 2, recipe: [] },
    ]));

    store.dispatch(new AddToCart('coffee aa'));
    store.dispatch(new AddToCart('coffee aa'));
    store.dispatch(new AddToCart('coffee bb'));

    // action
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show 2 items in list', () => {
    // arrange
    const [header, ...list] = fixture.debugElement.queryAll(By.css('li'));
    const expected = 2;

    // assert
    expect(list.length).toBe(expected);
  });

  it('should dispatch AddToCart', () => {
    // arrange
    const addOneItemButton = fixture.debugElement.query(By.css('.unit-controller button:nth-child(1)'));
    const expectedEvent = new AddToCart('coffee aa');

    // action
    const dispatcher = spyOn(store, 'dispatch');
    addOneItemButton.triggerEventHandler('click', null);

    // assert
    expect(dispatcher).toHaveBeenCalledWith(expectedEvent);
  });

  it('should dispatch RemoveOneCartItem', () => {
    // arrange
    const removeOneItemButton = fixture.debugElement.query(By.css('.unit-controller button:nth-child(2)'));
    const expectedEvent = new RemoveOneCartItem('coffee aa');

    // action
    const dispatcher = spyOn(store, 'dispatch');
    removeOneItemButton.triggerEventHandler('click', null);

    // assert
    expect(dispatcher).toHaveBeenCalledWith(expectedEvent);
  });

  it('should dispatch RemoveCartItem', () => {
    // arrange
    const removeItemButton = fixture.debugElement.query(By.css('.delete'));
    const expectedEvent = new RemoveCartItem('coffee aa');

    // action
    const dispatcher = spyOn(store, 'dispatch');
    removeItemButton.triggerEventHandler('click', null);

    // assert
    expect(dispatcher).toHaveBeenCalledWith(expectedEvent);
  });

});
