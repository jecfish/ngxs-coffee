import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { CustomizePageComponent } from './customize-page.component';

import { remixReducer } from '../../+state/remix.reducer';
import { remixInitialState } from '../../+state/remix.init';
import { SharedModule } from '../../../shared';
import { appReducer } from '../../../../state/app.reducer';
import { appInitialState } from '../../../../state/app.init';

describe('CustomizePageComponent', () => {
  let component: CustomizePageComponent;
  let fixture: ComponentFixture<CustomizePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        StoreModule.forRoot(
          { app: appReducer },
          { initialState: { app: appInitialState } }
        ),
        StoreModule.forFeature('remix', remixReducer, { initialState: remixInitialState })
      ],
      declarations: [ CustomizePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
