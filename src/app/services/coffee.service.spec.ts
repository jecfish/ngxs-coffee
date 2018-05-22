import { TestBed, inject } from '@angular/core/testing';

import { CoffeeService } from './coffee.service';
import { HttpClientModule } from '@angular/common/http';

describe('CoffeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [CoffeeService]
    });
  });

  it('should be created', inject([CoffeeService], (service: CoffeeService) => {
    expect(service).toBeTruthy();
  }));
});
