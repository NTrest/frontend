/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserinteractionService } from './userinteraction.service';

describe('Service: Userinteraction', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserinteractionService]
    });
  });

  it('should ...', inject([UserinteractionService], (service: UserinteractionService) => {
    expect(service).toBeTruthy();
  }));
});