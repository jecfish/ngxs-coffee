import { TestBed, inject } from '@angular/core/testing';

import { CoffeeService } from './coffee.service';

describe('CoffeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeeService]
    });
  });

  it('should be created', inject([CoffeeService], (service: CoffeeService) => {
    expect(service).toBeTruthy();
  }));
});
