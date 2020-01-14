import { TestBed } from '@angular/core/testing';

import { AuthService } from '../../../../../../libs/core-data/src/lib/auth/auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
