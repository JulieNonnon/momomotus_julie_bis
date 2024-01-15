import { TestBed } from '@angular/core/testing';

import { SetPrenomService } from './set-prenom.service';

describe('SetPrenomService', () => {
  let service: SetPrenomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetPrenomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
