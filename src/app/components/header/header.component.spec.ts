import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StoreModule, Store } from '@ngrx/store';

import { HeaderComponent } from './header.component';

import { appReducer } from '../../state/app.reducer';
import { appInitialState } from '../../state/app.init';
import { AddToCart } from '../../state/app.actions';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let store: Store<AppState>;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(
          { app: appReducer },
          { initialState: { app: appInitialState } }
        )
      ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.get(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return cart(0)', () => {
    // arrange
    const { nativeElement } = fixture.debugElement.query(By.css('a[routerLink="/cart"]'));
    const expected = 'cart (0)';

    // assert
    expect((<HTMLAnchorElement>nativeElement).innerText).toBe(expected);
  });

  it('should return cart(1)', () => {
    // arrange
    const { nativeElement } = fixture.debugElement.query(By.css('a[routerLink="/cart"]'));
    const expected = 'cart (1)';

    // action
    store.dispatch(new AddToCart('coffee aa'));
    fixture.detectChanges();

    // assert
    expect((<HTMLAnchorElement>nativeElement).innerText).toBe(expected);
  });
});
