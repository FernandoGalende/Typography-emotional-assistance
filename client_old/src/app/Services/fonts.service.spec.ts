/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FontsService } from './fonts.service';

describe('Service: Fonts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FontsService]
    });
  });

  it('should ...', inject([FontsService], (service: FontsService) => {
    expect(service).toBeTruthy();
  }));
});
