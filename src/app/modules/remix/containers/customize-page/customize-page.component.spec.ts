import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';

import { CustomizePageComponent } from './customize-page.component';

import { SharedModule } from '../../../shared';
import { AppState } from '../../../../state/app.state';
import { RemixState } from '../../+state/remix.state';
import { HttpClientModule } from '@angular/common/http';

describe('CustomizePageComponent', () => {
  let component: CustomizePageComponent;
  let fixture: ComponentFixture<CustomizePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        NgxsModule.forRoot([AppState]),
        NgxsModule.forFeature([RemixState]),
        HttpClientModule
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
