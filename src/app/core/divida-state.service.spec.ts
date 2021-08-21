import { TestBed } from '@angular/core/testing';

import { DividaStateService } from './divida-state.service';

describe('DividaStateService', () => {
  let service: DividaStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DividaStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
