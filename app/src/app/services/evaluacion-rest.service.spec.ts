import { TestBed } from '@angular/core/testing';

import { EvaluacionRestService } from './evaluacion-rest.service';

describe('EvaluacionRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvaluacionRestService = TestBed.get(EvaluacionRestService);
    expect(service).toBeTruthy();
  });
});
