import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { notCompletGuard } from './not-complet.guard';

describe('notCompletGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => notCompletGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
