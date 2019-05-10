import { TestBed } from '@angular/core/testing';

import { ItemEPageService } from './item-e-page.service';

describe('ItemEPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemEPageService = TestBed.get(ItemEPageService);
    expect(service).toBeTruthy();
  });
});
