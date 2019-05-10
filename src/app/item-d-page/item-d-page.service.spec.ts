import { TestBed } from '@angular/core/testing';

import { ItemDPageService } from './item-d-page.service';

describe('ItemDPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemDPageService = TestBed.get(ItemDPageService);
    expect(service).toBeTruthy();
  });
});
