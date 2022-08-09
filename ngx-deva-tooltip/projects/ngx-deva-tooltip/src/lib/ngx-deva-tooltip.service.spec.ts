import { TestBed } from '@angular/core/testing';

import { NgxDevaTooltipService } from './ngx-deva-tooltip.service';

describe('NgxDevaTooltipService', () => {
  let service: NgxDevaTooltipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDevaTooltipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
