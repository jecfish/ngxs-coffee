import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupComponent } from './cup.component';

describe('CupComponent', () => {
  let component: CupComponent;
  let fixture: ComponentFixture<CupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
