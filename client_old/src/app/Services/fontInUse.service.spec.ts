/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FontInUseService } from './fontInUse.service';

describe('Service: FontInUse', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FontInUseService]
    });
  });

  it('should ...', inject([FontInUseService], (service: FontInUseService) => {
    expect(service).toBeTruthy();
  }));
});
