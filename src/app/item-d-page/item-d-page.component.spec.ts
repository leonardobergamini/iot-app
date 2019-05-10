import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDPageComponent } from './item-d-page.component';

describe('ItemDPageComponent', () => {
  let component: ItemDPageComponent;
  let fixture: ComponentFixture<ItemDPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
