import { TestBed } from '@angular/core/testing';

import { ItemBPageService } from './item-b-page.service';

describe('ItemBPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemBPageService = TestBed.get(ItemBPageService);
    expect(service).toBeTruthy();
  });
});
