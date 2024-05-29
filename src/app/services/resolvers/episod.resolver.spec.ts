import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { episodResolver } from './episod.resolver';

describe('episodResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => episodResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
