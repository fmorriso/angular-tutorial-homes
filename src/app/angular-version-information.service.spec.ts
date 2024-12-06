import { TestBed } from '@angular/core/testing';

import { AngularVersionInformationService } from './services/angular-version-information.service';

describe('AngularVersionInformationService', () => {
  let service: AngularVersionInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularVersionInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
