/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WatsonService } from './watson.service';

describe('Service: Watson', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WatsonService]
    });
  });

  it('should ...', inject([WatsonService], (service: WatsonService) => {
    expect(service).toBeTruthy();
  }));
});
