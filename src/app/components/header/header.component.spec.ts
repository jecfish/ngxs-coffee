import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgxsModule, Store } from '@ngxs/store';

import { HeaderComponent } from './header.component';

import { AddToCart } from '../../state/app.actions';
import { AppState } from '../../state/app.state';
import { HttpClientModule } from '@angular/common/http';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let store: Store;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([
          AppState
        ]),
        HttpClientModule
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
