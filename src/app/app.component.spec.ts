import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot()
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
      declarations: [
        AppComponent, HeaderComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
