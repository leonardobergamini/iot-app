import { TestBed } from '@angular/core/testing';

import { ItemAPageService } from './item-a-page.service';

describe('ItemAPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemAPageService = TestBed.get(ItemAPageService);
    expect(service).toBeTruthy();
  });
});
