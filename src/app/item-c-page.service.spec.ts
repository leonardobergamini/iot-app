import { TestBed } from '@angular/core/testing';

import { ItemCPageService } from './item-c-page.service';

describe('ItemCPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemCPageService = TestBed.get(ItemCPageService);
    expect(service).toBeTruthy();
  });
});
