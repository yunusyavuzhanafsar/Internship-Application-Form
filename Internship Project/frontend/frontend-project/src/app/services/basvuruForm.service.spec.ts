import { TestBed } from '@angular/core/testing';

import { BasvuruformService } from './basvuruForm.service';

describe('BasvuruformService', () => {
  let service: BasvuruformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasvuruformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
