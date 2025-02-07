import { TestBed } from '@angular/core/testing';

import { MealsService } from './getmeals.service';

describe('GetmealsService', () => {
  let service: MealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
