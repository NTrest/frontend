/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DmService } from './dm.service';

describe('Service: Dm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DmService]
    });
  });

  it('should ...', inject([DmService], (service: DmService) => {
    expect(service).toBeTruthy();
  }));
});