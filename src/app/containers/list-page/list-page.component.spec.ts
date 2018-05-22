import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { NgxsModule, Store } from '@ngxs/store';

import { ListPageComponent } from './list-page.component';
import { PayComponent } from '../../components/pay/pay.component';

import { SharedModule } from '../../modules/shared';
import { GetCoffeeList, GetCoffeeListSuccess } from '../../state/app.actions';
import { AppState } from '../../state/app.state';
import { HttpClientModule } from '@angular/common/http';

describe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;
  let store: Store;
  let dispatcher;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        NgxsModule.forRoot([AppState]),
        HttpClientModule
      ],
      declarations: [ListPageComponent, PayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    dispatcher = spyOn(store, 'dispatch').and.callThrough();
  });

  describe('when coffee list is empty', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(ListPageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should dispatch GetCoffeeList', () => {
      // arrange
      const expectedEvent = new GetCoffeeList();

      // assert
      expect(dispatcher).toHaveBeenCalledWith(expectedEvent);
    });
  });

  describe('when coffee list is filled', () => {
    beforeEach(() => {
      // setup coffee list
      store.dispatch(new GetCoffeeListSuccess([
        { name: 'coffee aa', price: 1, recipe: [] }
      ]));

      fixture = TestBed.createComponent(ListPageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should not dispatch GetCoffeeList', () => {
      // arrange
      const expectedEvent = new GetCoffeeList();

      // action
      fixture.detectChanges();

      // assert
      expect(dispatcher).not.toHaveBeenCalledWith(expectedEvent);
    });
  });
});
